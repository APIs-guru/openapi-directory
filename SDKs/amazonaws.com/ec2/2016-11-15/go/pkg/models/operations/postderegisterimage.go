package operations

type PostDeregisterImageActionEnum string

const (
	PostDeregisterImageActionEnumDeregisterImage PostDeregisterImageActionEnum = "DeregisterImage"
)

type PostDeregisterImageVersionEnum string

const (
	PostDeregisterImageVersionEnumTwoThousandAndSixteen1115 PostDeregisterImageVersionEnum = "2016-11-15"
)

type PostDeregisterImageQueryParams struct {
	Action  PostDeregisterImageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeregisterImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeregisterImageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeregisterImageRequest struct {
	QueryParams PostDeregisterImageQueryParams
	Headers     PostDeregisterImageHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeregisterImageResponse struct {
	ContentType string
	StatusCode  int64
}
