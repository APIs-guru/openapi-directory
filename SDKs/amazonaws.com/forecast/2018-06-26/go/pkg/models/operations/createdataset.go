package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDatasetXAmzTargetEnum string

const (
	CreateDatasetXAmzTargetEnumAmazonForecastCreateDataset CreateDatasetXAmzTargetEnum = "AmazonForecast.CreateDataset"
)

type CreateDatasetHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDatasetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDatasetRequest struct {
	Headers CreateDatasetHeaders
	Request shared.CreateDatasetRequest `request:"mediaType=application/json"`
}

type CreateDatasetResponse struct {
	ContentType                    string
	CreateDatasetResponse          *shared.CreateDatasetResponse
	InvalidInputException          *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	StatusCode                     int64
}
