package operations

type GetListRoleTagsActionEnum string

const (
	GetListRoleTagsActionEnumListRoleTags GetListRoleTagsActionEnum = "ListRoleTags"
)

type GetListRoleTagsVersionEnum string

const (
	GetListRoleTagsVersionEnumTwoThousandAndTen0508 GetListRoleTagsVersionEnum = "2010-05-08"
)

type GetListRoleTagsQueryParams struct {
	Action   GetListRoleTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                    `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *int64                     `queryParam:"style=form,explode=true,name=MaxItems"`
	RoleName string                     `queryParam:"style=form,explode=true,name=RoleName"`
	Version  GetListRoleTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListRoleTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListRoleTagsRequest struct {
	QueryParams GetListRoleTagsQueryParams
	Headers     GetListRoleTagsHeaders
}

type GetListRoleTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
