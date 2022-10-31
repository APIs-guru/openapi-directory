package operations

import (
"openapi/pkg/models/shared")


type DescribeLogPatternXAmzTargetEnum string

const (
    DescribeLogPatternXAmzTargetEnumEc2WindowsBarleyServiceDescribeLogPattern DescribeLogPatternXAmzTargetEnum = "EC2WindowsBarleyService.DescribeLogPattern"
)


type DescribeLogPatternHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeLogPatternXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeLogPatternRequest struct {
    Headers DescribeLogPatternHeaders 
    Request shared.DescribeLogPatternRequest `request:"mediaType=application/json"`
    
}

type DescribeLogPatternResponse struct {
    ContentType string 
    DescribeLogPatternResponse *shared.DescribeLogPatternResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

