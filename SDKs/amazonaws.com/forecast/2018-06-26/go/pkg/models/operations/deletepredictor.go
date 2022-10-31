package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePredictorXAmzTargetEnum string

const (
	DeletePredictorXAmzTargetEnumAmazonForecastDeletePredictor DeletePredictorXAmzTargetEnum = "AmazonForecast.DeletePredictor"
)

type DeletePredictorHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePredictorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeletePredictorRequest struct {
	Headers DeletePredictorHeaders
	Request shared.DeletePredictorRequest `request:"mediaType=application/json"`
}

type DeletePredictorResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
