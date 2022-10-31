package operations

import (
"openapi/pkg/models/shared")


type UpdateFleetXAmzTargetEnum string

const (
    UpdateFleetXAmzTargetEnumPhotonAdminProxyServiceUpdateFleet UpdateFleetXAmzTargetEnum = "PhotonAdminProxyService.UpdateFleet"
)


type UpdateFleetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateFleetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateFleetRequest struct {
    Headers UpdateFleetHeaders 
    Request shared.UpdateFleetRequest `request:"mediaType=application/json"`
    
}

type UpdateFleetResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    IncompatibleImageException *interface{} 
    InvalidAccountStatusException *interface{} 
    InvalidParameterCombinationException *interface{} 
    InvalidRoleException *interface{} 
    LimitExceededException *interface{} 
    OperationNotPermittedException *interface{} 
    RequestLimitExceededException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotAvailableException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateFleetResult *shared.UpdateFleetResult 
    
}

