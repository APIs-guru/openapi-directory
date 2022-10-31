package operations

import (
"openapi/pkg/models/shared")


type AdminUpdateUserAttributesXAmzTargetEnum string

const (
    AdminUpdateUserAttributesXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminUpdateUserAttributes AdminUpdateUserAttributesXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminUpdateUserAttributes"
)


type AdminUpdateUserAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AdminUpdateUserAttributesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AdminUpdateUserAttributesRequest struct {
    Headers AdminUpdateUserAttributesHeaders 
    Request shared.AdminUpdateUserAttributesRequest `request:"mediaType=application/json"`
    
}

type AdminUpdateUserAttributesResponse struct {
    AdminUpdateUserAttributesResponse map[string]interface{} 
    AliasExistsException *interface{} 
    ContentType string 
    InternalErrorException *interface{} 
    InvalidEmailRoleAccessPolicyException *interface{} 
    InvalidLambdaResponseException *interface{} 
    InvalidParameterException *interface{} 
    InvalidSmsRoleAccessPolicyException *interface{} 
    InvalidSmsRoleTrustRelationshipException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnexpectedLambdaException *interface{} 
    UserLambdaValidationException *interface{} 
    UserNotFoundException *interface{} 
    
}

