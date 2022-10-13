package operations

import (
	"openapi/pkg/models/shared"
)

type StartDataCollectionByAgentIdsXAmzTargetEnum string

const (
	StartDataCollectionByAgentIdsXAmzTargetEnumAwsPoseidonServiceV20151101StartDataCollectionByAgentIds StartDataCollectionByAgentIdsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds"
)

type StartDataCollectionByAgentIdsHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartDataCollectionByAgentIdsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartDataCollectionByAgentIdsRequest struct {
	Headers StartDataCollectionByAgentIdsHeaders
	Request shared.StartDataCollectionByAgentIdsRequest `request:"mediaType=application/json"`
}

type StartDataCollectionByAgentIdsResponse struct {
	AuthorizationErrorException           *interface{}
	ContentType                           string
	HomeRegionNotSetException             *interface{}
	InvalidParameterException             *interface{}
	InvalidParameterValueException        *interface{}
	ServerInternalErrorException          *interface{}
	StartDataCollectionByAgentIdsResponse *shared.StartDataCollectionByAgentIdsResponse
	StatusCode                            int64
}
