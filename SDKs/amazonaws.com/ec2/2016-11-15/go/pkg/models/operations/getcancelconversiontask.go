package operations

type GetCancelConversionTaskActionEnum string

const (
	GetCancelConversionTaskActionEnumCancelConversionTask GetCancelConversionTaskActionEnum = "CancelConversionTask"
)

type GetCancelConversionTaskVersionEnum string

const (
	GetCancelConversionTaskVersionEnumTwoThousandAndSixteen1115 GetCancelConversionTaskVersionEnum = "2016-11-15"
)

type GetCancelConversionTaskQueryParams struct {
	Action           GetCancelConversionTaskActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ConversionTaskID string                             `queryParam:"style=form,explode=true,name=ConversionTaskId"`
	DryRun           *bool                              `queryParam:"style=form,explode=true,name=DryRun"`
	ReasonMessage    *string                            `queryParam:"style=form,explode=true,name=ReasonMessage"`
	Version          GetCancelConversionTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCancelConversionTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCancelConversionTaskRequest struct {
	QueryParams GetCancelConversionTaskQueryParams
	Headers     GetCancelConversionTaskHeaders
}

type GetCancelConversionTaskResponse struct {
	ContentType string
	StatusCode  int64
}
