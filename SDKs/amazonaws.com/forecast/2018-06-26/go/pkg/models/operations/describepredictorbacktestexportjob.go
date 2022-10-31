package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePredictorBacktestExportJobXAmzTargetEnum string

const (
	DescribePredictorBacktestExportJobXAmzTargetEnumAmazonForecastDescribePredictorBacktestExportJob DescribePredictorBacktestExportJobXAmzTargetEnum = "AmazonForecast.DescribePredictorBacktestExportJob"
)

type DescribePredictorBacktestExportJobHeaders struct {
	XAmzAlgorithm     *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePredictorBacktestExportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribePredictorBacktestExportJobRequest struct {
	Headers DescribePredictorBacktestExportJobHeaders
	Request shared.DescribePredictorBacktestExportJobRequest `request:"mediaType=application/json"`
}

type DescribePredictorBacktestExportJobResponse struct {
	ContentType                                string
	DescribePredictorBacktestExportJobResponse *shared.DescribePredictorBacktestExportJobResponse
	InvalidInputException                      *interface{}
	ResourceNotFoundException                  *interface{}
	StatusCode                                 int64
}
