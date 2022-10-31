package operations

type GetListAttachedGroupPoliciesActionEnum string

const (
	GetListAttachedGroupPoliciesActionEnumListAttachedGroupPolicies GetListAttachedGroupPoliciesActionEnum = "ListAttachedGroupPolicies"
)

type GetListAttachedGroupPoliciesVersionEnum string

const (
	GetListAttachedGroupPoliciesVersionEnumTwoThousandAndTen0508 GetListAttachedGroupPoliciesVersionEnum = "2010-05-08"
)

type GetListAttachedGroupPoliciesQueryParams struct {
	Action     GetListAttachedGroupPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GroupName  string                                  `queryParam:"style=form,explode=true,name=GroupName"`
	Marker     *string                                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems   *int64                                  `queryParam:"style=form,explode=true,name=MaxItems"`
	PathPrefix *string                                 `queryParam:"style=form,explode=true,name=PathPrefix"`
	Version    GetListAttachedGroupPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListAttachedGroupPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListAttachedGroupPoliciesRequest struct {
	QueryParams GetListAttachedGroupPoliciesQueryParams
	Headers     GetListAttachedGroupPoliciesHeaders
}

type GetListAttachedGroupPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
