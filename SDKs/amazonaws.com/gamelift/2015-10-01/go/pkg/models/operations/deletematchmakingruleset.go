package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMatchmakingRuleSetXAmzTargetEnum string

const (
	DeleteMatchmakingRuleSetXAmzTargetEnumGameLiftDeleteMatchmakingRuleSet DeleteMatchmakingRuleSetXAmzTargetEnum = "GameLift.DeleteMatchmakingRuleSet"
)

type DeleteMatchmakingRuleSetHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteMatchmakingRuleSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteMatchmakingRuleSetRequest struct {
	Headers DeleteMatchmakingRuleSetHeaders
	Request shared.DeleteMatchmakingRuleSetInput `request:"mediaType=application/json"`
}

type DeleteMatchmakingRuleSetResponse struct {
	ContentType                    string
	DeleteMatchmakingRuleSetOutput map[string]interface{}
	InternalServiceException       *interface{}
	InvalidRequestException        *interface{}
	NotFoundException              *interface{}
	StatusCode                     int64
	TaggingFailedException         *interface{}
	UnsupportedRegionException     *interface{}
}
