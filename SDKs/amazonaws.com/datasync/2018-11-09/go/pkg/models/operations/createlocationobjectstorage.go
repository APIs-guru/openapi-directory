package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLocationObjectStorageXAmzTargetEnum string

const (
	CreateLocationObjectStorageXAmzTargetEnumFmrsServiceCreateLocationObjectStorage CreateLocationObjectStorageXAmzTargetEnum = "FmrsService.CreateLocationObjectStorage"
)

type CreateLocationObjectStorageHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLocationObjectStorageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLocationObjectStorageRequest struct {
	Headers CreateLocationObjectStorageHeaders
	Request shared.CreateLocationObjectStorageRequest `request:"mediaType=application/json"`
}

type CreateLocationObjectStorageResponse struct {
	ContentType                         string
	CreateLocationObjectStorageResponse *shared.CreateLocationObjectStorageResponse
	InternalException                   *interface{}
	InvalidRequestException             *interface{}
	StatusCode                          int64
}
