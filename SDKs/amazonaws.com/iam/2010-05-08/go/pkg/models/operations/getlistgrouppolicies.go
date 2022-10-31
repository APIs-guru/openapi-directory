package operations

type GetListGroupPoliciesActionEnum string

const (
	GetListGroupPoliciesActionEnumListGroupPolicies GetListGroupPoliciesActionEnum = "ListGroupPolicies"
)

type GetListGroupPoliciesVersionEnum string

const (
	GetListGroupPoliciesVersionEnumTwoThousandAndTen0508 GetListGroupPoliciesVersionEnum = "2010-05-08"
)

type GetListGroupPoliciesQueryParams struct {
	Action    GetListGroupPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GroupName string                          `queryParam:"style=form,explode=true,name=GroupName"`
	Marker    *string                         `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems  *int64                          `queryParam:"style=form,explode=true,name=MaxItems"`
	Version   GetListGroupPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListGroupPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListGroupPoliciesRequest struct {
	QueryParams GetListGroupPoliciesQueryParams
	Headers     GetListGroupPoliciesHeaders
}

type GetListGroupPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
