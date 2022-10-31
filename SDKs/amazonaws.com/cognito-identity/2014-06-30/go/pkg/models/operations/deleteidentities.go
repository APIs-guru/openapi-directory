package operations

import (
"openapi/pkg/models/shared")


type DeleteIdentitiesXAmzTargetEnum string

const (
    DeleteIdentitiesXAmzTargetEnumAwsCognitoIdentityServiceDeleteIdentities DeleteIdentitiesXAmzTargetEnum = "AWSCognitoIdentityService.DeleteIdentities"
)


type DeleteIdentitiesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteIdentitiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteIdentitiesRequest struct {
    Headers DeleteIdentitiesHeaders 
    Request shared.DeleteIdentitiesInput `request:"mediaType=application/json"`
    
}

type DeleteIdentitiesResponse struct {
    ContentType string 
    DeleteIdentitiesResponse *shared.DeleteIdentitiesResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

