package operations

import (
	"openapi/pkg/models/shared"
)

type StartConfigurationRecorderXAmzTargetEnum string

const (
	StartConfigurationRecorderXAmzTargetEnumStarlingDoveServiceStartConfigurationRecorder StartConfigurationRecorderXAmzTargetEnum = "StarlingDoveService.StartConfigurationRecorder"
)

type StartConfigurationRecorderHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartConfigurationRecorderXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartConfigurationRecorderRequest struct {
	Headers StartConfigurationRecorderHeaders
	Request shared.StartConfigurationRecorderRequest `request:"mediaType=application/json"`
}

type StartConfigurationRecorderResponse struct {
	ContentType                          string
	NoAvailableDeliveryChannelException  *interface{}
	NoSuchConfigurationRecorderException *interface{}
	StatusCode                           int64
}
