package operations

type GetListRolesActionEnum string

const (
	GetListRolesActionEnumListRoles GetListRolesActionEnum = "ListRoles"
)

type GetListRolesVersionEnum string

const (
	GetListRolesVersionEnumTwoThousandAndTen0508 GetListRolesVersionEnum = "2010-05-08"
)

type GetListRolesQueryParams struct {
	Action     GetListRolesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems   *int64                  `queryParam:"style=form,explode=true,name=MaxItems"`
	PathPrefix *string                 `queryParam:"style=form,explode=true,name=PathPrefix"`
	Version    GetListRolesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListRolesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListRolesRequest struct {
	QueryParams GetListRolesQueryParams
	Headers     GetListRolesHeaders
}

type GetListRolesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
