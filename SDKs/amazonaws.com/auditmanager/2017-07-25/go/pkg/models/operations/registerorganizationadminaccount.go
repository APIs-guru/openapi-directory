package operations

import (
"openapi/pkg/models/shared")

type RegisterOrganizationAdminAccountHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type RegisterOrganizationAdminAccountRequestBody struct {
    AdminAccountID string `json:"adminAccountId"`
    
}

type RegisterOrganizationAdminAccountRequest struct {
    Headers RegisterOrganizationAdminAccountHeaders 
    Request RegisterOrganizationAdminAccountRequestBody `request:"mediaType=application/json"`
    
}

type RegisterOrganizationAdminAccountResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    RegisterOrganizationAdminAccountResponse *shared.RegisterOrganizationAdminAccountResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

