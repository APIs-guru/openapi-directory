package operations

import (
"openapi/pkg/models/shared")

type UpdateExperimentTemplatePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateExperimentTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateExperimentTemplateRequestBody struct {
    Actions map[string]shared.UpdateExperimentTemplateActionInputItem `json:"actions,omitempty"`
    Description *string `json:"description,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    StopConditions []shared.UpdateExperimentTemplateStopConditionInput `json:"stopConditions,omitempty"`
    Targets map[string]shared.UpdateExperimentTemplateTargetInput `json:"targets,omitempty"`
    
}

type UpdateExperimentTemplateRequest struct {
    PathParams UpdateExperimentTemplatePathParams 
    Headers UpdateExperimentTemplateHeaders 
    Request UpdateExperimentTemplateRequestBody `request:"mediaType=application/json"`
    
}

type UpdateExperimentTemplateResponse struct {
    ContentType string 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    UpdateExperimentTemplateResponse *shared.UpdateExperimentTemplateResponse 
    ValidationException *interface{} 
    
}

