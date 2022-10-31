package operations

import (
"openapi/pkg/models/shared")


type DescribeStacksXAmzTargetEnum string

const (
    DescribeStacksXAmzTargetEnumPhotonAdminProxyServiceDescribeStacks DescribeStacksXAmzTargetEnum = "PhotonAdminProxyService.DescribeStacks"
)


type DescribeStacksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeStacksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeStacksRequest struct {
    Headers DescribeStacksHeaders 
    Request shared.DescribeStacksRequest `request:"mediaType=application/json"`
    
}

type DescribeStacksResponse struct {
    ContentType string 
    DescribeStacksResult *shared.DescribeStacksResult 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

