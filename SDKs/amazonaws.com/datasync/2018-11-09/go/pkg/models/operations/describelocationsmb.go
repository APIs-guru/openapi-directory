package operations

import (
"openapi/pkg/models/shared")


type DescribeLocationSmbXAmzTargetEnum string

const (
    DescribeLocationSmbXAmzTargetEnumFmrsServiceDescribeLocationSmb DescribeLocationSmbXAmzTargetEnum = "FmrsService.DescribeLocationSmb"
)


type DescribeLocationSmbHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeLocationSmbXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeLocationSmbRequest struct {
    Headers DescribeLocationSmbHeaders 
    Request shared.DescribeLocationSmbRequest `request:"mediaType=application/json"`
    
}

type DescribeLocationSmbResponse struct {
    ContentType string 
    DescribeLocationSmbResponse *shared.DescribeLocationSmbResponse 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

