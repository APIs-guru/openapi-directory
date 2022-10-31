package operations

import (
"openapi/pkg/models/shared")


type ListLunaClientsXAmzTargetEnum string

const (
    ListLunaClientsXAmzTargetEnumCloudHsmFrontendServiceListLunaClients ListLunaClientsXAmzTargetEnum = "CloudHsmFrontendService.ListLunaClients"
)


type ListLunaClientsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListLunaClientsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListLunaClientsRequest struct {
    Headers ListLunaClientsHeaders 
    Request shared.ListLunaClientsRequest `request:"mediaType=application/json"`
    
}

type ListLunaClientsResponse struct {
    CloudHsmInternalException *interface{} 
    CloudHsmServiceException *interface{} 
    ContentType string 
    InvalidRequestException *interface{} 
    ListLunaClientsResponse *shared.ListLunaClientsResponse 
    StatusCode int64 
    
}

