package operations

import (
	"openapi/pkg/models/shared"
)

type StartConfigurationRecorderXAmzTargetEnum string

const (
	StartConfigurationRecorderXAmzTargetEnumStarlingDoveServiceStartConfigurationRecorder StartConfigurationRecorderXAmzTargetEnum = "StarlingDoveService.StartConfigurationRecorder"
)

type StartConfigurationRecorderHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartConfigurationRecorderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
