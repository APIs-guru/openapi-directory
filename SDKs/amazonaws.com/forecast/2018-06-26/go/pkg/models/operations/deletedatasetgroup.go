package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDatasetGroupXAmzTargetEnum string

const (
	DeleteDatasetGroupXAmzTargetEnumAmazonForecastDeleteDatasetGroup DeleteDatasetGroupXAmzTargetEnum = "AmazonForecast.DeleteDatasetGroup"
)

type DeleteDatasetGroupHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDatasetGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDatasetGroupRequest struct {
	Headers DeleteDatasetGroupHeaders
	Request shared.DeleteDatasetGroupRequest `request:"mediaType=application/json"`
}

type DeleteDatasetGroupResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
