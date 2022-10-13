package operations

type GetListAttachedUserPoliciesActionEnum string

const (
	GetListAttachedUserPoliciesActionEnumListAttachedUserPolicies GetListAttachedUserPoliciesActionEnum = "ListAttachedUserPolicies"
)

type GetListAttachedUserPoliciesVersionEnum string

const (
	GetListAttachedUserPoliciesVersionEnumTwoThousandAndTen0508 GetListAttachedUserPoliciesVersionEnum = "2010-05-08"
)

type GetListAttachedUserPoliciesQueryParams struct {
	Action     GetListAttachedUserPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems   *int64                                 `queryParam:"style=form,explode=true,name=MaxItems"`
	PathPrefix *string                                `queryParam:"style=form,explode=true,name=PathPrefix"`
	UserName   string                                 `queryParam:"style=form,explode=true,name=UserName"`
	Version    GetListAttachedUserPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListAttachedUserPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListAttachedUserPoliciesRequest struct {
	QueryParams GetListAttachedUserPoliciesQueryParams
	Headers     GetListAttachedUserPoliciesHeaders
}

type GetListAttachedUserPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
