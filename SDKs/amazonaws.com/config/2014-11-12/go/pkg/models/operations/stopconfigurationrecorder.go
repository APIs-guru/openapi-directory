package operations

import (
	"openapi/pkg/models/shared"
)

type StopConfigurationRecorderXAmzTargetEnum string

const (
	StopConfigurationRecorderXAmzTargetEnumStarlingDoveServiceStopConfigurationRecorder StopConfigurationRecorderXAmzTargetEnum = "StarlingDoveService.StopConfigurationRecorder"
)

type StopConfigurationRecorderHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopConfigurationRecorderXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopConfigurationRecorderRequest struct {
	Headers StopConfigurationRecorderHeaders
	Request shared.StopConfigurationRecorderRequest `request:"mediaType=application/json"`
}

type StopConfigurationRecorderResponse struct {
	ContentType                          string
	NoSuchConfigurationRecorderException *interface{}
	StatusCode                           int64
}
