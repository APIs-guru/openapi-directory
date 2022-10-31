package operations

import (
"openapi/pkg/models/shared")


type GetInsightSelectorsXAmzTargetEnum string

const (
    GetInsightSelectorsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101GetInsightSelectors GetInsightSelectorsXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors"
)


type GetInsightSelectorsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetInsightSelectorsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetInsightSelectorsRequest struct {
    Headers GetInsightSelectorsHeaders 
    Request shared.GetInsightSelectorsRequest `request:"mediaType=application/json"`
    
}

type GetInsightSelectorsResponse struct {
    ContentType string 
    GetInsightSelectorsResponse *shared.GetInsightSelectorsResponse 
    InsightNotEnabledException *interface{} 
    InvalidTrailNameException *interface{} 
    OperationNotPermittedException *interface{} 
    StatusCode int64 
    TrailNotFoundException *interface{} 
    UnsupportedOperationException *interface{} 
    
}

