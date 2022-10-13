package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeForecastExportJobXAmzTargetEnum string

const (
	DescribeForecastExportJobXAmzTargetEnumAmazonForecastDescribeForecastExportJob DescribeForecastExportJobXAmzTargetEnum = "AmazonForecast.DescribeForecastExportJob"
)

type DescribeForecastExportJobHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeForecastExportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeForecastExportJobRequest struct {
	Headers DescribeForecastExportJobHeaders
	Request shared.DescribeForecastExportJobRequest `request:"mediaType=application/json"`
}

type DescribeForecastExportJobResponse struct {
	ContentType                       string
	DescribeForecastExportJobResponse *shared.DescribeForecastExportJobResponse
	InvalidInputException             *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
}
