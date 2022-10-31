package operations

import (
"openapi/pkg/models/shared")

type UpdateRoleAliasPathParams struct {
    RoleAlias string `pathParam:"style=simple,explode=false,name=roleAlias"`
    
}

type UpdateRoleAliasHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateRoleAliasRequestBody struct {
    CredentialDurationSeconds *int64 `json:"credentialDurationSeconds,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

type UpdateRoleAliasRequest struct {
    PathParams UpdateRoleAliasPathParams 
    Headers UpdateRoleAliasHeaders 
    Request UpdateRoleAliasRequestBody `request:"mediaType=application/json"`
    
}

type UpdateRoleAliasResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    UpdateRoleAliasResponse *shared.UpdateRoleAliasResponse 
    
}

