package operations

import (
"openapi/pkg/models/shared")


type ExportEc2InstanceRecommendationsXAmzTargetEnum string

const (
    ExportEc2InstanceRecommendationsXAmzTargetEnumComputeOptimizerServiceExportEc2InstanceRecommendations ExportEc2InstanceRecommendationsXAmzTargetEnum = "ComputeOptimizerService.ExportEC2InstanceRecommendations"
)


type ExportEc2InstanceRecommendationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ExportEc2InstanceRecommendationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ExportEc2InstanceRecommendationsRequest struct {
    Headers ExportEc2InstanceRecommendationsHeaders 
    Request shared.ExportEc2InstanceRecommendationsRequest `request:"mediaType=application/json"`
    
}

type ExportEc2InstanceRecommendationsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    ExportEc2InstanceRecommendationsResponse *shared.ExportEc2InstanceRecommendationsResponse 
    InternalServerException *interface{} 
    InvalidParameterValueException *interface{} 
    LimitExceededException *interface{} 
    MissingAuthenticationToken *interface{} 
    OptInRequiredException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

