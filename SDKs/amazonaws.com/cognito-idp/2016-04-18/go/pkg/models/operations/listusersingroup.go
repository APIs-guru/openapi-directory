package operations

import (
"openapi/pkg/models/shared")

type ListUsersInGroupQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=Limit"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListUsersInGroupXAmzTargetEnum string

const (
    ListUsersInGroupXAmzTargetEnumAwsCognitoIdentityProviderServiceListUsersInGroup ListUsersInGroupXAmzTargetEnum = "AWSCognitoIdentityProviderService.ListUsersInGroup"
)


type ListUsersInGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListUsersInGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListUsersInGroupRequest struct {
    QueryParams ListUsersInGroupQueryParams 
    Headers ListUsersInGroupHeaders 
    Request shared.ListUsersInGroupRequest `request:"mediaType=application/json"`
    
}

type ListUsersInGroupResponse struct {
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    ListUsersInGroupResponse *shared.ListUsersInGroupResponse 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

