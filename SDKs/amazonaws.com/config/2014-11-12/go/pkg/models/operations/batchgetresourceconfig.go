package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetResourceConfigXAmzTargetEnum string

const (
	BatchGetResourceConfigXAmzTargetEnumStarlingDoveServiceBatchGetResourceConfig BatchGetResourceConfigXAmzTargetEnum = "StarlingDoveService.BatchGetResourceConfig"
)

type BatchGetResourceConfigHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetResourceConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetResourceConfigRequest struct {
	Headers BatchGetResourceConfigHeaders
	Request shared.BatchGetResourceConfigRequest `request:"mediaType=application/json"`
}

type BatchGetResourceConfigResponse struct {
	BatchGetResourceConfigResponse            *shared.BatchGetResourceConfigResponse
	ContentType                               string
	NoAvailableConfigurationRecorderException *interface{}
	StatusCode                                int64
	ValidationException                       *interface{}
}
