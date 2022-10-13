package operations

import (
	"openapi/pkg/models/shared"
)

type PutResourceConfigXAmzTargetEnum string

const (
	PutResourceConfigXAmzTargetEnumStarlingDoveServicePutResourceConfig PutResourceConfigXAmzTargetEnum = "StarlingDoveService.PutResourceConfig"
)

type PutResourceConfigHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutResourceConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutResourceConfigRequest struct {
	Headers PutResourceConfigHeaders
	Request shared.PutResourceConfigRequest `request:"mediaType=application/json"`
}

type PutResourceConfigResponse struct {
	ContentType                             string
	InsufficientPermissionsException        *interface{}
	MaxActiveResourcesExceededException     *interface{}
	NoRunningConfigurationRecorderException *interface{}
	StatusCode                              int64
	ValidationException                     *interface{}
}
