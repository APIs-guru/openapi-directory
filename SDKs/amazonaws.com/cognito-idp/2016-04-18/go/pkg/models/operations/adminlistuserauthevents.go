package operations

import (
"openapi/pkg/models/shared")

type AdminListUserAuthEventsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type AdminListUserAuthEventsXAmzTargetEnum string

const (
    AdminListUserAuthEventsXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminListUserAuthEvents AdminListUserAuthEventsXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminListUserAuthEvents"
)


type AdminListUserAuthEventsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AdminListUserAuthEventsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AdminListUserAuthEventsRequest struct {
    QueryParams AdminListUserAuthEventsQueryParams 
    Headers AdminListUserAuthEventsHeaders 
    Request shared.AdminListUserAuthEventsRequest `request:"mediaType=application/json"`
    
}

type AdminListUserAuthEventsResponse struct {
    AdminListUserAuthEventsResponse *shared.AdminListUserAuthEventsResponse 
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UserNotFoundException *interface{} 
    UserPoolAddOnNotEnabledException *interface{} 
    
}

