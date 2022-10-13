package operations

type PostUntagUserActionEnum string

const (
	PostUntagUserActionEnumUntagUser PostUntagUserActionEnum = "UntagUser"
)

type PostUntagUserVersionEnum string

const (
	PostUntagUserVersionEnumTwoThousandAndTen0508 PostUntagUserVersionEnum = "2010-05-08"
)

type PostUntagUserQueryParams struct {
	Action  PostUntagUserActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUntagUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUntagUserHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUntagUserRequest struct {
	QueryParams PostUntagUserQueryParams
	Headers     PostUntagUserHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUntagUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
