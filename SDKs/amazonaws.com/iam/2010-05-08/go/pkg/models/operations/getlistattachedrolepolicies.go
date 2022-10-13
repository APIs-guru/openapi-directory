package operations

type GetListAttachedRolePoliciesActionEnum string

const (
	GetListAttachedRolePoliciesActionEnumListAttachedRolePolicies GetListAttachedRolePoliciesActionEnum = "ListAttachedRolePolicies"
)

type GetListAttachedRolePoliciesVersionEnum string

const (
	GetListAttachedRolePoliciesVersionEnumTwoThousandAndTen0508 GetListAttachedRolePoliciesVersionEnum = "2010-05-08"
)

type GetListAttachedRolePoliciesQueryParams struct {
	Action     GetListAttachedRolePoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems   *int64                                 `queryParam:"style=form,explode=true,name=MaxItems"`
	PathPrefix *string                                `queryParam:"style=form,explode=true,name=PathPrefix"`
	RoleName   string                                 `queryParam:"style=form,explode=true,name=RoleName"`
	Version    GetListAttachedRolePoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListAttachedRolePoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListAttachedRolePoliciesRequest struct {
	QueryParams GetListAttachedRolePoliciesQueryParams
	Headers     GetListAttachedRolePoliciesHeaders
}

type GetListAttachedRolePoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
