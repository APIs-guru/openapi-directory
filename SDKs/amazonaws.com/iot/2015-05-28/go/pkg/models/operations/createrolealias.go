package operations

import (
"openapi/pkg/models/shared")

type CreateRoleAliasPathParams struct {
    RoleAlias string `pathParam:"style=simple,explode=false,name=roleAlias"`
    
}

type CreateRoleAliasHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateRoleAliasRequestBody struct {
    CredentialDurationSeconds *int64 `json:"credentialDurationSeconds,omitempty"`
    RoleArn string `json:"roleArn"`
    Tags []shared.Tag `json:"tags,omitempty"`
    
}

type CreateRoleAliasRequest struct {
    PathParams CreateRoleAliasPathParams 
    Headers CreateRoleAliasHeaders 
    Request CreateRoleAliasRequestBody `request:"mediaType=application/json"`
    
}

type CreateRoleAliasResponse struct {
    ContentType string 
    CreateRoleAliasResponse *shared.CreateRoleAliasResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

