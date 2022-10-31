package operations

import (
"openapi/pkg/models/shared")


type DescribeComponentXAmzTargetEnum string

const (
    DescribeComponentXAmzTargetEnumEc2WindowsBarleyServiceDescribeComponent DescribeComponentXAmzTargetEnum = "EC2WindowsBarleyService.DescribeComponent"
)


type DescribeComponentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeComponentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeComponentRequest struct {
    Headers DescribeComponentHeaders 
    Request shared.DescribeComponentRequest `request:"mediaType=application/json"`
    
}

type DescribeComponentResponse struct {
    ContentType string 
    DescribeComponentResponse *shared.DescribeComponentResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

