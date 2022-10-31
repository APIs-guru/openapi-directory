package operations

import (
"openapi/pkg/models/shared")


type DescribeConfigurationRecorderStatusXAmzTargetEnum string

const (
    DescribeConfigurationRecorderStatusXAmzTargetEnumStarlingDoveServiceDescribeConfigurationRecorderStatus DescribeConfigurationRecorderStatusXAmzTargetEnum = "StarlingDoveService.DescribeConfigurationRecorderStatus"
)


type DescribeConfigurationRecorderStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeConfigurationRecorderStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeConfigurationRecorderStatusRequest struct {
    Headers DescribeConfigurationRecorderStatusHeaders 
    Request shared.DescribeConfigurationRecorderStatusRequest `request:"mediaType=application/json"`
    
}

type DescribeConfigurationRecorderStatusResponse struct {
    ContentType string 
    DescribeConfigurationRecorderStatusResponse *shared.DescribeConfigurationRecorderStatusResponse 
    NoSuchConfigurationRecorderException *interface{} 
    StatusCode int64 
    
}

