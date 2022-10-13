package operations

type PostListUsersActionEnum string

const (
	PostListUsersActionEnumListUsers PostListUsersActionEnum = "ListUsers"
)

type PostListUsersVersionEnum string

const (
	PostListUsersVersionEnumTwoThousandAndTen0508 PostListUsersVersionEnum = "2010-05-08"
)

type PostListUsersQueryParams struct {
	Action   PostListUsersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                  `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                  `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListUsersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListUsersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListUsersRequest struct {
	QueryParams PostListUsersQueryParams
	Headers     PostListUsersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListUsersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
