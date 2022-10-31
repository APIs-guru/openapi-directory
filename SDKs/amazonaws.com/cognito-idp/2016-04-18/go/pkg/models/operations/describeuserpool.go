package operations

import (
"openapi/pkg/models/shared")


type DescribeUserPoolXAmzTargetEnum string

const (
    DescribeUserPoolXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeUserPool DescribeUserPoolXAmzTargetEnum = "AWSCognitoIdentityProviderService.DescribeUserPool"
)


type DescribeUserPoolHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeUserPoolXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeUserPoolRequest struct {
    Headers DescribeUserPoolHeaders 
    Request shared.DescribeUserPoolRequest `request:"mediaType=application/json"`
    
}

type DescribeUserPoolResponse struct {
    ContentType string 
    DescribeUserPoolResponse *shared.DescribeUserPoolResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UserPoolTaggingException *interface{} 
    
}

