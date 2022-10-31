package operations

import (
"openapi/pkg/models/shared")


type DescribeEntityRecognizerXAmzTargetEnum string

const (
    DescribeEntityRecognizerXAmzTargetEnumComprehend20171127DescribeEntityRecognizer DescribeEntityRecognizerXAmzTargetEnum = "Comprehend_20171127.DescribeEntityRecognizer"
)


type DescribeEntityRecognizerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeEntityRecognizerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeEntityRecognizerRequest struct {
    Headers DescribeEntityRecognizerHeaders 
    Request shared.DescribeEntityRecognizerRequest `request:"mediaType=application/json"`
    
}

type DescribeEntityRecognizerResponse struct {
    ContentType string 
    DescribeEntityRecognizerResponse *shared.DescribeEntityRecognizerResponse 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

