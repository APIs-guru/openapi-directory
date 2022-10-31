package operations

import (
"openapi/pkg/models/shared")


type DescribeRuntimeConfigurationXAmzTargetEnum string

const (
    DescribeRuntimeConfigurationXAmzTargetEnumGameLiftDescribeRuntimeConfiguration DescribeRuntimeConfigurationXAmzTargetEnum = "GameLift.DescribeRuntimeConfiguration"
)


type DescribeRuntimeConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeRuntimeConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeRuntimeConfigurationRequest struct {
    Headers DescribeRuntimeConfigurationHeaders 
    Request shared.DescribeRuntimeConfigurationInput `request:"mediaType=application/json"`
    
}

type DescribeRuntimeConfigurationResponse struct {
    ContentType string 
    DescribeRuntimeConfigurationOutput *shared.DescribeRuntimeConfigurationOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

