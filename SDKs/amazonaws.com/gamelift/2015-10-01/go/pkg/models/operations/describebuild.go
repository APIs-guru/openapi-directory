package operations

import (
"openapi/pkg/models/shared")


type DescribeBuildXAmzTargetEnum string

const (
    DescribeBuildXAmzTargetEnumGameLiftDescribeBuild DescribeBuildXAmzTargetEnum = "GameLift.DescribeBuild"
)


type DescribeBuildHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeBuildXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeBuildRequest struct {
    Headers DescribeBuildHeaders 
    Request shared.DescribeBuildInput `request:"mediaType=application/json"`
    
}

type DescribeBuildResponse struct {
    ContentType string 
    DescribeBuildOutput *shared.DescribeBuildOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

