package operations

type PostDeleteUserActionEnum string

const (
	PostDeleteUserActionEnumDeleteUser PostDeleteUserActionEnum = "DeleteUser"
)

type PostDeleteUserVersionEnum string

const (
	PostDeleteUserVersionEnumTwoThousandAndTen0508 PostDeleteUserVersionEnum = "2010-05-08"
)

type PostDeleteUserQueryParams struct {
	Action  PostDeleteUserActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteUserHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteUserRequest struct {
	QueryParams PostDeleteUserQueryParams
	Headers     PostDeleteUserHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
