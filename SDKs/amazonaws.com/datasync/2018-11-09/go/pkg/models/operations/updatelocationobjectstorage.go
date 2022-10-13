package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLocationObjectStorageXAmzTargetEnum string

const (
	UpdateLocationObjectStorageXAmzTargetEnumFmrsServiceUpdateLocationObjectStorage UpdateLocationObjectStorageXAmzTargetEnum = "FmrsService.UpdateLocationObjectStorage"
)

type UpdateLocationObjectStorageHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateLocationObjectStorageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateLocationObjectStorageRequest struct {
	Headers UpdateLocationObjectStorageHeaders
	Request shared.UpdateLocationObjectStorageRequest `request:"mediaType=application/json"`
}

type UpdateLocationObjectStorageResponse struct {
	ContentType                         string
	InternalException                   *interface{}
	InvalidRequestException             *interface{}
	StatusCode                          int64
	UpdateLocationObjectStorageResponse map[string]interface{}
}
