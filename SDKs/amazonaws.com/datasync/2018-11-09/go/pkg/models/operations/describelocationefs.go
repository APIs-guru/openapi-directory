package operations

import (
"openapi/pkg/models/shared")


type DescribeLocationEfsXAmzTargetEnum string

const (
    DescribeLocationEfsXAmzTargetEnumFmrsServiceDescribeLocationEfs DescribeLocationEfsXAmzTargetEnum = "FmrsService.DescribeLocationEfs"
)


type DescribeLocationEfsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeLocationEfsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeLocationEfsRequest struct {
    Headers DescribeLocationEfsHeaders 
    Request shared.DescribeLocationEfsRequest `request:"mediaType=application/json"`
    
}

type DescribeLocationEfsResponse struct {
    ContentType string 
    DescribeLocationEfsResponse *shared.DescribeLocationEfsResponse 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

