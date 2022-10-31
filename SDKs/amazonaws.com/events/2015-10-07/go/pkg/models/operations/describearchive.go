package operations

import (
"openapi/pkg/models/shared")


type DescribeArchiveXAmzTargetEnum string

const (
    DescribeArchiveXAmzTargetEnumAwsEventsDescribeArchive DescribeArchiveXAmzTargetEnum = "AWSEvents.DescribeArchive"
)


type DescribeArchiveHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeArchiveXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeArchiveRequest struct {
    Headers DescribeArchiveHeaders 
    Request shared.DescribeArchiveRequest `request:"mediaType=application/json"`
    
}

type DescribeArchiveResponse struct {
    ContentType string 
    DescribeArchiveResponse *shared.DescribeArchiveResponse 
    InternalException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

