package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLocationSmbXAmzTargetEnum string

const (
	CreateLocationSmbXAmzTargetEnumFmrsServiceCreateLocationSmb CreateLocationSmbXAmzTargetEnum = "FmrsService.CreateLocationSmb"
)

type CreateLocationSmbHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLocationSmbXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLocationSmbRequest struct {
	Headers CreateLocationSmbHeaders
	Request shared.CreateLocationSmbRequest `request:"mediaType=application/json"`
}

type CreateLocationSmbResponse struct {
	ContentType               string
	CreateLocationSmbResponse *shared.CreateLocationSmbResponse
	InternalException         *interface{}
	InvalidRequestException   *interface{}
	StatusCode                int64
}
