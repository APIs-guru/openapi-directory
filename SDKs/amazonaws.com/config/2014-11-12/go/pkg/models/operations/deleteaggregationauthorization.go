package operations

import (
"openapi/pkg/models/shared")


type DeleteAggregationAuthorizationXAmzTargetEnum string

const (
    DeleteAggregationAuthorizationXAmzTargetEnumStarlingDoveServiceDeleteAggregationAuthorization DeleteAggregationAuthorizationXAmzTargetEnum = "StarlingDoveService.DeleteAggregationAuthorization"
)


type DeleteAggregationAuthorizationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteAggregationAuthorizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteAggregationAuthorizationRequest struct {
    Headers DeleteAggregationAuthorizationHeaders 
    Request shared.DeleteAggregationAuthorizationRequest `request:"mediaType=application/json"`
    
}

type DeleteAggregationAuthorizationResponse struct {
    ContentType string 
    InvalidParameterValueException *interface{} 
    StatusCode int64 
    
}

