package operations

type PostCopyImageActionEnum string

const (
	PostCopyImageActionEnumCopyImage PostCopyImageActionEnum = "CopyImage"
)

type PostCopyImageVersionEnum string

const (
	PostCopyImageVersionEnumTwoThousandAndSixteen1115 PostCopyImageVersionEnum = "2016-11-15"
)

type PostCopyImageQueryParams struct {
	Action  PostCopyImageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCopyImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCopyImageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCopyImageRequest struct {
	QueryParams PostCopyImageQueryParams
	Headers     PostCopyImageHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCopyImageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
