package operations

import (
"openapi/pkg/models/shared")


type DescribeConditionalForwardersXAmzTargetEnum string

const (
    DescribeConditionalForwardersXAmzTargetEnumDirectoryService20150416DescribeConditionalForwarders DescribeConditionalForwardersXAmzTargetEnum = "DirectoryService_20150416.DescribeConditionalForwarders"
)


type DescribeConditionalForwardersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeConditionalForwardersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeConditionalForwardersRequest struct {
    Headers DescribeConditionalForwardersHeaders 
    Request shared.DescribeConditionalForwardersRequest `request:"mediaType=application/json"`
    
}

type DescribeConditionalForwardersResponse struct {
    ClientException *interface{} 
    ContentType string 
    DescribeConditionalForwardersResult *shared.DescribeConditionalForwardersResult 
    DirectoryUnavailableException *interface{} 
    EntityDoesNotExistException *interface{} 
    InvalidParameterException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

