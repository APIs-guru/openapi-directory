package operations

import (
"openapi/pkg/models/shared")


type DescribeLocationFsxWindowsXAmzTargetEnum string

const (
    DescribeLocationFsxWindowsXAmzTargetEnumFmrsServiceDescribeLocationFsxWindows DescribeLocationFsxWindowsXAmzTargetEnum = "FmrsService.DescribeLocationFsxWindows"
)


type DescribeLocationFsxWindowsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeLocationFsxWindowsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeLocationFsxWindowsRequest struct {
    Headers DescribeLocationFsxWindowsHeaders 
    Request shared.DescribeLocationFsxWindowsRequest `request:"mediaType=application/json"`
    
}

type DescribeLocationFsxWindowsResponse struct {
    ContentType string 
    DescribeLocationFsxWindowsResponse *shared.DescribeLocationFsxWindowsResponse 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

