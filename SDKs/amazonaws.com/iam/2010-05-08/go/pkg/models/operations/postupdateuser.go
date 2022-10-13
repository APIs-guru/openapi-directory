package operations

type PostUpdateUserActionEnum string

const (
	PostUpdateUserActionEnumUpdateUser PostUpdateUserActionEnum = "UpdateUser"
)

type PostUpdateUserVersionEnum string

const (
	PostUpdateUserVersionEnumTwoThousandAndTen0508 PostUpdateUserVersionEnum = "2010-05-08"
)

type PostUpdateUserQueryParams struct {
	Action  PostUpdateUserActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateUserHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateUserRequest struct {
	QueryParams PostUpdateUserQueryParams
	Headers     PostUpdateUserHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
