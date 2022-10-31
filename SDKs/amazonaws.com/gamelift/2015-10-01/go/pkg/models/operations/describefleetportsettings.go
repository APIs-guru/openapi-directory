package operations

import (
"openapi/pkg/models/shared")


type DescribeFleetPortSettingsXAmzTargetEnum string

const (
    DescribeFleetPortSettingsXAmzTargetEnumGameLiftDescribeFleetPortSettings DescribeFleetPortSettingsXAmzTargetEnum = "GameLift.DescribeFleetPortSettings"
)


type DescribeFleetPortSettingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeFleetPortSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeFleetPortSettingsRequest struct {
    Headers DescribeFleetPortSettingsHeaders 
    Request shared.DescribeFleetPortSettingsInput `request:"mediaType=application/json"`
    
}

type DescribeFleetPortSettingsResponse struct {
    ContentType string 
    DescribeFleetPortSettingsOutput *shared.DescribeFleetPortSettingsOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

