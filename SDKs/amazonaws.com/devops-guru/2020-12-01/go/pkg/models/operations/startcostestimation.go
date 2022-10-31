package operations

import (
"openapi/pkg/models/shared")

type StartCostEstimationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type StartCostEstimationRequestBodyResourceCollection struct {
    CloudFormation *shared.CloudFormationCostEstimationResourceCollectionFilter `json:"CloudFormation,omitempty"`
    
}

type StartCostEstimationRequestBody struct {
    ClientToken *string `json:"ClientToken,omitempty"`
    ResourceCollection StartCostEstimationRequestBodyResourceCollection `json:"ResourceCollection"`
    
}

type StartCostEstimationRequest struct {
    Headers StartCostEstimationHeaders 
    Request StartCostEstimationRequestBody `request:"mediaType=application/json"`
    
}

type StartCostEstimationResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StartCostEstimationResponse map[string]interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

