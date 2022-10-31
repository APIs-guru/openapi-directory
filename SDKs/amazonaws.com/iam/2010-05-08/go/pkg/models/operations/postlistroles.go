package operations

type PostListRolesActionEnum string

const (
	PostListRolesActionEnumListRoles PostListRolesActionEnum = "ListRoles"
)

type PostListRolesVersionEnum string

const (
	PostListRolesVersionEnumTwoThousandAndTen0508 PostListRolesVersionEnum = "2010-05-08"
)

type PostListRolesQueryParams struct {
	Action   PostListRolesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                  `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                  `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListRolesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListRolesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostListRolesRequest struct {
	QueryParams PostListRolesQueryParams
	Headers     PostListRolesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListRolesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
