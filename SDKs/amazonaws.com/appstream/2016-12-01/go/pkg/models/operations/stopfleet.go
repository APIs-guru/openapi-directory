package operations

import (
"openapi/pkg/models/shared")


type StopFleetXAmzTargetEnum string

const (
    StopFleetXAmzTargetEnumPhotonAdminProxyServiceStopFleet StopFleetXAmzTargetEnum = "PhotonAdminProxyService.StopFleet"
)


type StopFleetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopFleetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopFleetRequest struct {
    Headers StopFleetHeaders 
    Request shared.StopFleetRequest `request:"mediaType=application/json"`
    
}

type StopFleetResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    StopFleetResult map[string]interface{} 
    
}

