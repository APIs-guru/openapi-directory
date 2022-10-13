package operations

type PostDeleteFpgaImageActionEnum string

const (
	PostDeleteFpgaImageActionEnumDeleteFpgaImage PostDeleteFpgaImageActionEnum = "DeleteFpgaImage"
)

type PostDeleteFpgaImageVersionEnum string

const (
	PostDeleteFpgaImageVersionEnumTwoThousandAndSixteen1115 PostDeleteFpgaImageVersionEnum = "2016-11-15"
)

type PostDeleteFpgaImageQueryParams struct {
	Action  PostDeleteFpgaImageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteFpgaImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteFpgaImageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteFpgaImageRequest struct {
	QueryParams PostDeleteFpgaImageQueryParams
	Headers     PostDeleteFpgaImageHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteFpgaImageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
