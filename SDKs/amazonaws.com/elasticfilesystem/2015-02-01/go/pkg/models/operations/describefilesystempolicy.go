package operations

import (
"openapi/pkg/models/shared")

type DescribeFileSystemPolicyPathParams struct {
    FileSystemID string `pathParam:"style=simple,explode=false,name=FileSystemId"`
    
}

type DescribeFileSystemPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeFileSystemPolicyRequest struct {
    PathParams DescribeFileSystemPolicyPathParams 
    Headers DescribeFileSystemPolicyHeaders 
    
}

type DescribeFileSystemPolicyResponse struct {
    ContentType string 
    FileSystemNotFound *interface{} 
    FileSystemPolicyDescription *shared.FileSystemPolicyDescription 
    InternalServerError *interface{} 
    PolicyNotFound *interface{} 
    StatusCode int64 
    
}

