package operations

import (
"openapi/pkg/models/shared")


type DeregisterScalableTargetXAmzTargetEnum string

const (
    DeregisterScalableTargetXAmzTargetEnumAnyScaleFrontendServiceDeregisterScalableTarget DeregisterScalableTargetXAmzTargetEnum = "AnyScaleFrontendService.DeregisterScalableTarget"
)


type DeregisterScalableTargetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeregisterScalableTargetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeregisterScalableTargetRequest struct {
    Headers DeregisterScalableTargetHeaders 
    Request shared.DeregisterScalableTargetRequest `request:"mediaType=application/json"`
    
}

type DeregisterScalableTargetResponse struct {
    ConcurrentUpdateException *interface{} 
    ContentType string 
    DeregisterScalableTargetResponse map[string]interface{} 
    InternalServiceException *interface{} 
    ObjectNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

