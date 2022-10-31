package operations

import (
"openapi/pkg/models/shared")


type AssociateFleetXAmzTargetEnum string

const (
    AssociateFleetXAmzTargetEnumPhotonAdminProxyServiceAssociateFleet AssociateFleetXAmzTargetEnum = "PhotonAdminProxyService.AssociateFleet"
)


type AssociateFleetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssociateFleetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssociateFleetRequest struct {
    Headers AssociateFleetHeaders 
    Request shared.AssociateFleetRequest `request:"mediaType=application/json"`
    
}

type AssociateFleetResponse struct {
    AssociateFleetResult map[string]interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    IncompatibleImageException *interface{} 
    InvalidAccountStatusException *interface{} 
    LimitExceededException *interface{} 
    OperationNotPermittedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

