package operations

type PostRegisterImageActionEnum string

const (
	PostRegisterImageActionEnumRegisterImage PostRegisterImageActionEnum = "RegisterImage"
)

type PostRegisterImageVersionEnum string

const (
	PostRegisterImageVersionEnumTwoThousandAndSixteen1115 PostRegisterImageVersionEnum = "2016-11-15"
)

type PostRegisterImageQueryParams struct {
	Action  PostRegisterImageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRegisterImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRegisterImageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRegisterImageRequest struct {
	QueryParams PostRegisterImageQueryParams
	Headers     PostRegisterImageHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRegisterImageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
