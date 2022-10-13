package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResourceConfigXAmzTargetEnum string

const (
	DeleteResourceConfigXAmzTargetEnumStarlingDoveServiceDeleteResourceConfig DeleteResourceConfigXAmzTargetEnum = "StarlingDoveService.DeleteResourceConfig"
)

type DeleteResourceConfigHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteResourceConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteResourceConfigRequest struct {
	Headers DeleteResourceConfigHeaders
	Request shared.DeleteResourceConfigRequest `request:"mediaType=application/json"`
}

type DeleteResourceConfigResponse struct {
	ContentType                             string
	NoRunningConfigurationRecorderException *interface{}
	StatusCode                              int64
	ValidationException                     *interface{}
}
