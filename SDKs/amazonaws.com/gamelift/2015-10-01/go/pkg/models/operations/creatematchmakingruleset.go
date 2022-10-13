package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMatchmakingRuleSetXAmzTargetEnum string

const (
	CreateMatchmakingRuleSetXAmzTargetEnumGameLiftCreateMatchmakingRuleSet CreateMatchmakingRuleSetXAmzTargetEnum = "GameLift.CreateMatchmakingRuleSet"
)

type CreateMatchmakingRuleSetHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateMatchmakingRuleSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateMatchmakingRuleSetRequest struct {
	Headers CreateMatchmakingRuleSetHeaders
	Request shared.CreateMatchmakingRuleSetInput `request:"mediaType=application/json"`
}

type CreateMatchmakingRuleSetResponse struct {
	ContentType                    string
	CreateMatchmakingRuleSetOutput *shared.CreateMatchmakingRuleSetOutput
	InternalServiceException       *interface{}
	InvalidRequestException        *interface{}
	StatusCode                     int64
	TaggingFailedException         *interface{}
	UnsupportedRegionException     *interface{}
}
