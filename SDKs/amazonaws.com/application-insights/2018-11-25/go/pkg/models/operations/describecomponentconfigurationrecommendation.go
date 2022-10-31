package operations

import (
"openapi/pkg/models/shared")


type DescribeComponentConfigurationRecommendationXAmzTargetEnum string

const (
    DescribeComponentConfigurationRecommendationXAmzTargetEnumEc2WindowsBarleyServiceDescribeComponentConfigurationRecommendation DescribeComponentConfigurationRecommendationXAmzTargetEnum = "EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation"
)


type DescribeComponentConfigurationRecommendationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeComponentConfigurationRecommendationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeComponentConfigurationRecommendationRequest struct {
    Headers DescribeComponentConfigurationRecommendationHeaders 
    Request shared.DescribeComponentConfigurationRecommendationRequest `request:"mediaType=application/json"`
    
}

type DescribeComponentConfigurationRecommendationResponse struct {
    ContentType string 
    DescribeComponentConfigurationRecommendationResponse *shared.DescribeComponentConfigurationRecommendationResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

