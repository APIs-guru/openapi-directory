package operations



type DeregisterOrganizationAdminAccountHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeregisterOrganizationAdminAccountRequestBody struct {
    AdminAccountID *string `json:"adminAccountId,omitempty"`
    
}

type DeregisterOrganizationAdminAccountRequest struct {
    Headers DeregisterOrganizationAdminAccountHeaders 
    Request DeregisterOrganizationAdminAccountRequestBody `request:"mediaType=application/json"`
    
}

type DeregisterOrganizationAdminAccountResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DeregisterOrganizationAdminAccountResponse map[string]interface{} 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

