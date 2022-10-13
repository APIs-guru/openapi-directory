package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMatchmakingConfigurationXAmzTargetEnum string

const (
	UpdateMatchmakingConfigurationXAmzTargetEnumGameLiftUpdateMatchmakingConfiguration UpdateMatchmakingConfigurationXAmzTargetEnum = "GameLift.UpdateMatchmakingConfiguration"
)

type UpdateMatchmakingConfigurationHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateMatchmakingConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateMatchmakingConfigurationRequest struct {
	Headers UpdateMatchmakingConfigurationHeaders
	Request shared.UpdateMatchmakingConfigurationInput `request:"mediaType=application/json"`
}

type UpdateMatchmakingConfigurationResponse struct {
	ContentType                          string
	InternalServiceException             *interface{}
	InvalidRequestException              *interface{}
	NotFoundException                    *interface{}
	StatusCode                           int64
	UnsupportedRegionException           *interface{}
	UpdateMatchmakingConfigurationOutput *shared.UpdateMatchmakingConfigurationOutput
}
