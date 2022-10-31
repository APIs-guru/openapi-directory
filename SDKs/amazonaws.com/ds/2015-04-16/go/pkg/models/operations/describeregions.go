package operations

import (
"openapi/pkg/models/shared")


type DescribeRegionsXAmzTargetEnum string

const (
    DescribeRegionsXAmzTargetEnumDirectoryService20150416DescribeRegions DescribeRegionsXAmzTargetEnum = "DirectoryService_20150416.DescribeRegions"
)


type DescribeRegionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeRegionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeRegionsRequest struct {
    Headers DescribeRegionsHeaders 
    Request shared.DescribeRegionsRequest `request:"mediaType=application/json"`
    
}

type DescribeRegionsResponse struct {
    AccessDeniedException *interface{} 
    ClientException *interface{} 
    ContentType string 
    DescribeRegionsResult *shared.DescribeRegionsResult 
    DirectoryDoesNotExistException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

