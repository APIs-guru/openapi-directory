package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDatasetGroupXAmzTargetEnum string

const (
	CreateDatasetGroupXAmzTargetEnumAmazonForecastCreateDatasetGroup CreateDatasetGroupXAmzTargetEnum = "AmazonForecast.CreateDatasetGroup"
)

type CreateDatasetGroupHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDatasetGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDatasetGroupRequest struct {
	Headers CreateDatasetGroupHeaders
	Request shared.CreateDatasetGroupRequest `request:"mediaType=application/json"`
}

type CreateDatasetGroupResponse struct {
	ContentType                    string
	CreateDatasetGroupResponse     *shared.CreateDatasetGroupResponse
	InvalidInputException          *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceInUseException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
