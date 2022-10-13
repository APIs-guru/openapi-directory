package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccuracyMetricsXAmzTargetEnum string

const (
	GetAccuracyMetricsXAmzTargetEnumAmazonForecastGetAccuracyMetrics GetAccuracyMetricsXAmzTargetEnum = "AmazonForecast.GetAccuracyMetrics"
)

type GetAccuracyMetricsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAccuracyMetricsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAccuracyMetricsRequest struct {
	Headers GetAccuracyMetricsHeaders
	Request shared.GetAccuracyMetricsRequest `request:"mediaType=application/json"`
}

type GetAccuracyMetricsResponse struct {
	ContentType                string
	GetAccuracyMetricsResponse *shared.GetAccuracyMetricsResponse
	InvalidInputException      *interface{}
	ResourceInUseException     *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
