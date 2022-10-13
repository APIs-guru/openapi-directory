package operations

import (
	"openapi/pkg/models/shared"
)

type PutConfigurationRecorderXAmzTargetEnum string

const (
	PutConfigurationRecorderXAmzTargetEnumStarlingDoveServicePutConfigurationRecorder PutConfigurationRecorderXAmzTargetEnum = "StarlingDoveService.PutConfigurationRecorder"
)

type PutConfigurationRecorderHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutConfigurationRecorderXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutConfigurationRecorderRequest struct {
	Headers PutConfigurationRecorderHeaders
	Request shared.PutConfigurationRecorderRequest `request:"mediaType=application/json"`
}

type PutConfigurationRecorderResponse struct {
	ContentType                                        string
	InvalidConfigurationRecorderNameException          *interface{}
	InvalidRecordingGroupException                     *interface{}
	InvalidRoleException                               *interface{}
	MaxNumberOfConfigurationRecordersExceededException *interface{}
	StatusCode                                         int64
}
