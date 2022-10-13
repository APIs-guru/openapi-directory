package operations

import (
	"openapi/pkg/models/shared"
)

type ValidateMatchmakingRuleSetXAmzTargetEnum string

const (
	ValidateMatchmakingRuleSetXAmzTargetEnumGameLiftValidateMatchmakingRuleSet ValidateMatchmakingRuleSetXAmzTargetEnum = "GameLift.ValidateMatchmakingRuleSet"
)

type ValidateMatchmakingRuleSetHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ValidateMatchmakingRuleSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ValidateMatchmakingRuleSetRequest struct {
	Headers ValidateMatchmakingRuleSetHeaders
	Request shared.ValidateMatchmakingRuleSetInput `request:"mediaType=application/json"`
}

type ValidateMatchmakingRuleSetResponse struct {
	ContentType                      string
	InternalServiceException         *interface{}
	InvalidRequestException          *interface{}
	StatusCode                       int64
	UnsupportedRegionException       *interface{}
	ValidateMatchmakingRuleSetOutput *shared.ValidateMatchmakingRuleSetOutput
}
