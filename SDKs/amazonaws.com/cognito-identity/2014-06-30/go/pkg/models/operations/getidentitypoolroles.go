package operations

import (
"openapi/pkg/models/shared")


type GetIdentityPoolRolesXAmzTargetEnum string

const (
    GetIdentityPoolRolesXAmzTargetEnumAwsCognitoIdentityServiceGetIdentityPoolRoles GetIdentityPoolRolesXAmzTargetEnum = "AWSCognitoIdentityService.GetIdentityPoolRoles"
)


type GetIdentityPoolRolesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetIdentityPoolRolesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetIdentityPoolRolesRequest struct {
    Headers GetIdentityPoolRolesHeaders 
    Request shared.GetIdentityPoolRolesInput `request:"mediaType=application/json"`
    
}

type GetIdentityPoolRolesResponse struct {
    ContentType string 
    GetIdentityPoolRolesResponse *shared.GetIdentityPoolRolesResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceConflictException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

