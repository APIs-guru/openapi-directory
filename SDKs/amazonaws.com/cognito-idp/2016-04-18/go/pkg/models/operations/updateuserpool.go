package operations

import (
"openapi/pkg/models/shared")


type UpdateUserPoolXAmzTargetEnum string

const (
    UpdateUserPoolXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateUserPool UpdateUserPoolXAmzTargetEnum = "AWSCognitoIdentityProviderService.UpdateUserPool"
)


type UpdateUserPoolHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateUserPoolXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateUserPoolRequest struct {
    Headers UpdateUserPoolHeaders 
    Request shared.UpdateUserPoolRequest `request:"mediaType=application/json"`
    
}

type UpdateUserPoolResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    InternalErrorException *interface{} 
    InvalidEmailRoleAccessPolicyException *interface{} 
    InvalidParameterException *interface{} 
    InvalidSmsRoleAccessPolicyException *interface{} 
    InvalidSmsRoleTrustRelationshipException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UpdateUserPoolResponse map[string]interface{} 
    UserImportInProgressException *interface{} 
    UserPoolTaggingException *interface{} 
    
}

