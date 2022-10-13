package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDatasetGroupXAmzTargetEnum string

const (
	UpdateDatasetGroupXAmzTargetEnumAmazonForecastUpdateDatasetGroup UpdateDatasetGroupXAmzTargetEnum = "AmazonForecast.UpdateDatasetGroup"
)

type UpdateDatasetGroupHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDatasetGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDatasetGroupRequest struct {
	Headers UpdateDatasetGroupHeaders
	Request shared.UpdateDatasetGroupRequest `request:"mediaType=application/json"`
}

type UpdateDatasetGroupResponse struct {
	ContentType                string
	InvalidInputException      *interface{}
	ResourceInUseException     *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	UpdateDatasetGroupResponse map[string]interface{}
}
