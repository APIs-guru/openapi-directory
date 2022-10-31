package operations

type GetListUserPoliciesActionEnum string

const (
	GetListUserPoliciesActionEnumListUserPolicies GetListUserPoliciesActionEnum = "ListUserPolicies"
)

type GetListUserPoliciesVersionEnum string

const (
	GetListUserPoliciesVersionEnumTwoThousandAndTen0508 GetListUserPoliciesVersionEnum = "2010-05-08"
)

type GetListUserPoliciesQueryParams struct {
	Action   GetListUserPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                        `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *int64                         `queryParam:"style=form,explode=true,name=MaxItems"`
	UserName string                         `queryParam:"style=form,explode=true,name=UserName"`
	Version  GetListUserPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListUserPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListUserPoliciesRequest struct {
	QueryParams GetListUserPoliciesQueryParams
	Headers     GetListUserPoliciesHeaders
}

type GetListUserPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
