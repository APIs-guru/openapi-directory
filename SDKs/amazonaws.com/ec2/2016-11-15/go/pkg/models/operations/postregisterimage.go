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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
