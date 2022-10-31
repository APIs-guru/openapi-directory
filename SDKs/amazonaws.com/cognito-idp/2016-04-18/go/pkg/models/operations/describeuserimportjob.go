package operations

import (
"openapi/pkg/models/shared")


type DescribeUserImportJobXAmzTargetEnum string

const (
    DescribeUserImportJobXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeUserImportJob DescribeUserImportJobXAmzTargetEnum = "AWSCognitoIdentityProviderService.DescribeUserImportJob"
)


type DescribeUserImportJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeUserImportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeUserImportJobRequest struct {
    Headers DescribeUserImportJobHeaders 
    Request shared.DescribeUserImportJobRequest `request:"mediaType=application/json"`
    
}

type DescribeUserImportJobResponse struct {
    ContentType string 
    DescribeUserImportJobResponse *shared.DescribeUserImportJobResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

