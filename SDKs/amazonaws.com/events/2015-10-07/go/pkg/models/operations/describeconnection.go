package operations

import (
"openapi/pkg/models/shared")


type DescribeConnectionXAmzTargetEnum string

const (
    DescribeConnectionXAmzTargetEnumAwsEventsDescribeConnection DescribeConnectionXAmzTargetEnum = "AWSEvents.DescribeConnection"
)


type DescribeConnectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeConnectionRequest struct {
    Headers DescribeConnectionHeaders 
    Request shared.DescribeConnectionRequest `request:"mediaType=application/json"`
    
}

type DescribeConnectionResponse struct {
    ContentType string 
    DescribeConnectionResponse *shared.DescribeConnectionResponse 
    InternalException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

