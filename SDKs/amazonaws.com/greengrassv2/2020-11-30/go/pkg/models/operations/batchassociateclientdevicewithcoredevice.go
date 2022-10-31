package operations

import (
"openapi/pkg/models/shared")

type BatchAssociateClientDeviceWithCoreDevicePathParams struct {
    CoreDeviceThingName string `pathParam:"style=simple,explode=false,name=coreDeviceThingName"`
    
}

type BatchAssociateClientDeviceWithCoreDeviceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchAssociateClientDeviceWithCoreDeviceRequestBody struct {
    Entries []shared.AssociateClientDeviceWithCoreDeviceEntry `json:"entries,omitempty"`
    
}

type BatchAssociateClientDeviceWithCoreDeviceRequest struct {
    PathParams BatchAssociateClientDeviceWithCoreDevicePathParams 
    Headers BatchAssociateClientDeviceWithCoreDeviceHeaders 
    Request BatchAssociateClientDeviceWithCoreDeviceRequestBody `request:"mediaType=application/json"`
    
}

type BatchAssociateClientDeviceWithCoreDeviceResponse struct {
    AccessDeniedException *interface{} 
    BatchAssociateClientDeviceWithCoreDeviceResponse *shared.BatchAssociateClientDeviceWithCoreDeviceResponse 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

