package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMatchmakingConfigurationXAmzTargetEnum string

const (
	DeleteMatchmakingConfigurationXAmzTargetEnumGameLiftDeleteMatchmakingConfiguration DeleteMatchmakingConfigurationXAmzTargetEnum = "GameLift.DeleteMatchmakingConfiguration"
)

type DeleteMatchmakingConfigurationHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteMatchmakingConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteMatchmakingConfigurationRequest struct {
	Headers DeleteMatchmakingConfigurationHeaders
	Request shared.DeleteMatchmakingConfigurationInput `request:"mediaType=application/json"`
}

type DeleteMatchmakingConfigurationResponse struct {
	ContentType                          string
	DeleteMatchmakingConfigurationOutput map[string]interface{}
	InternalServiceException             *interface{}
	InvalidRequestException              *interface{}
	NotFoundException                    *interface{}
	StatusCode                           int64
	TaggingFailedException               *interface{}
	UnsupportedRegionException           *interface{}
}
