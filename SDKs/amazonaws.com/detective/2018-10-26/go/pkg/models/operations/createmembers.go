package operations

import (
"openapi/pkg/models/shared")

type CreateMembersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateMembersRequestBody struct {
    Accounts []shared.Account `json:"Accounts"`
    DisableEmailNotification *bool `json:"DisableEmailNotification,omitempty"`
    GraphArn string `json:"GraphArn"`
    Message *string `json:"Message,omitempty"`
    
}

type CreateMembersRequest struct {
    Headers CreateMembersHeaders 
    Request CreateMembersRequestBody `request:"mediaType=application/json"`
    
}

type CreateMembersResponse struct {
    ContentType string 
    CreateMembersResponse *shared.CreateMembersResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

