package operations

import (
	"openapi/pkg/models/shared"
)

type StopDataCollectionByAgentIdsXAmzTargetEnum string

const (
	StopDataCollectionByAgentIdsXAmzTargetEnumAwsPoseidonServiceV20151101StopDataCollectionByAgentIds StopDataCollectionByAgentIdsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds"
)

type StopDataCollectionByAgentIdsHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopDataCollectionByAgentIdsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopDataCollectionByAgentIdsRequest struct {
	Headers StopDataCollectionByAgentIdsHeaders
	Request shared.StopDataCollectionByAgentIdsRequest `request:"mediaType=application/json"`
}

type StopDataCollectionByAgentIdsResponse struct {
	AuthorizationErrorException          *interface{}
	ContentType                          string
	HomeRegionNotSetException            *interface{}
	InvalidParameterException            *interface{}
	InvalidParameterValueException       *interface{}
	ServerInternalErrorException         *interface{}
	StatusCode                           int64
	StopDataCollectionByAgentIdsResponse *shared.StopDataCollectionByAgentIdsResponse
}
