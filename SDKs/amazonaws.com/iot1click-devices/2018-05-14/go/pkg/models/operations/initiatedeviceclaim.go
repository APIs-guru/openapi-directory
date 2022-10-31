package operations

import (
"openapi/pkg/models/shared")

type InitiateDeviceClaimPathParams struct {
    DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
    
}

type InitiateDeviceClaimHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type InitiateDeviceClaimRequest struct {
    PathParams InitiateDeviceClaimPathParams 
    Headers InitiateDeviceClaimHeaders 
    
}

type InitiateDeviceClaimResponse struct {
    ContentType string 
    InitiateDeviceClaimResponse *shared.InitiateDeviceClaimResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceConflictException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

