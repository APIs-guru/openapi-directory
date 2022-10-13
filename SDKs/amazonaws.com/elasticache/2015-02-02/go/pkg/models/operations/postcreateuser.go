package operations

type PostCreateUserActionEnum string

const (
	PostCreateUserActionEnumCreateUser PostCreateUserActionEnum = "CreateUser"
)

type PostCreateUserVersionEnum string

const (
	PostCreateUserVersionEnumTwoThousandAndFifteen0202 PostCreateUserVersionEnum = "2015-02-02"
)

type PostCreateUserQueryParams struct {
	Action  PostCreateUserActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateUserHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateUserRequest struct {
	QueryParams PostCreateUserQueryParams
	Headers     PostCreateUserHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
