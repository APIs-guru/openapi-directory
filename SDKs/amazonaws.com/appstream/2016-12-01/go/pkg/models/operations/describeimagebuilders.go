package operations

import (
"openapi/pkg/models/shared")


type DescribeImageBuildersXAmzTargetEnum string

const (
    DescribeImageBuildersXAmzTargetEnumPhotonAdminProxyServiceDescribeImageBuilders DescribeImageBuildersXAmzTargetEnum = "PhotonAdminProxyService.DescribeImageBuilders"
)


type DescribeImageBuildersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeImageBuildersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeImageBuildersRequest struct {
    Headers DescribeImageBuildersHeaders 
    Request shared.DescribeImageBuildersRequest `request:"mediaType=application/json"`
    
}

type DescribeImageBuildersResponse struct {
    ContentType string 
    DescribeImageBuildersResult *shared.DescribeImageBuildersResult 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

