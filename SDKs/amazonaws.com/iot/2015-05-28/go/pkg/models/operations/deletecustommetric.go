package operations

type DeleteCustomMetricPathParams struct {
	MetricName string `pathParam:"style=simple,explode=false,name=metricName"`
}

type DeleteCustomMetricHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteCustomMetricRequest struct {
	PathParams DeleteCustomMetricPathParams
	Headers    DeleteCustomMetricHeaders
}

type DeleteCustomMetricResponse struct {
	ContentType                string
	DeleteCustomMetricResponse map[string]interface{}
	InternalFailureException   *interface{}
	InvalidRequestException    *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
}
