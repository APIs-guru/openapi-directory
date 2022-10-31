package operations

import (
"openapi/pkg/models/shared")


type StartDataCollectionByAgentIdsXAmzTargetEnum string

const (
    StartDataCollectionByAgentIdsXAmzTargetEnumAwsPoseidonServiceV20151101StartDataCollectionByAgentIds StartDataCollectionByAgentIdsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds"
)


type StartDataCollectionByAgentIdsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartDataCollectionByAgentIdsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartDataCollectionByAgentIdsRequest struct {
    Headers StartDataCollectionByAgentIdsHeaders 
    Request shared.StartDataCollectionByAgentIdsRequest `request:"mediaType=application/json"`
    
}

type StartDataCollectionByAgentIdsResponse struct {
    AuthorizationErrorException *interface{} 
    ContentType string 
    HomeRegionNotSetException *interface{} 
    InvalidParameterException *interface{} 
    InvalidParameterValueException *interface{} 
    ServerInternalErrorException *interface{} 
    StartDataCollectionByAgentIdsResponse *shared.StartDataCollectionByAgentIdsResponse 
    StatusCode int64 
    
}

