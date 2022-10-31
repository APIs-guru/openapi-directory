package operations

import (
	"openapi/pkg/models/shared"
)

type CreateForecastExportJobXAmzTargetEnum string

const (
	CreateForecastExportJobXAmzTargetEnumAmazonForecastCreateForecastExportJob CreateForecastExportJobXAmzTargetEnum = "AmazonForecast.CreateForecastExportJob"
)

type CreateForecastExportJobHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateForecastExportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateForecastExportJobRequest struct {
	Headers CreateForecastExportJobHeaders
	Request shared.CreateForecastExportJobRequest `request:"mediaType=application/json"`
}

type CreateForecastExportJobResponse struct {
	ContentType                     string
	CreateForecastExportJobResponse *shared.CreateForecastExportJobResponse
	InvalidInputException           *interface{}
	LimitExceededException          *interface{}
	ResourceAlreadyExistsException  *interface{}
	ResourceInUseException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
