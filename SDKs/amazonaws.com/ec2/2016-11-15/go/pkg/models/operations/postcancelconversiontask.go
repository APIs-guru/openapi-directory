package operations

type PostCancelConversionTaskActionEnum string

const (
	PostCancelConversionTaskActionEnumCancelConversionTask PostCancelConversionTaskActionEnum = "CancelConversionTask"
)

type PostCancelConversionTaskVersionEnum string

const (
	PostCancelConversionTaskVersionEnumTwoThousandAndSixteen1115 PostCancelConversionTaskVersionEnum = "2016-11-15"
)

type PostCancelConversionTaskQueryParams struct {
	Action  PostCancelConversionTaskActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCancelConversionTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCancelConversionTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCancelConversionTaskRequest struct {
	QueryParams PostCancelConversionTaskQueryParams
	Headers     PostCancelConversionTaskHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCancelConversionTaskResponse struct {
	ContentType string
	StatusCode  int64
}
