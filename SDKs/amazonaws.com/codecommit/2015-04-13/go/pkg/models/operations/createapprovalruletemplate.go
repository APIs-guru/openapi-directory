package operations

import (
"openapi/pkg/models/shared")


type CreateApprovalRuleTemplateXAmzTargetEnum string

const (
    CreateApprovalRuleTemplateXAmzTargetEnumCodeCommit20150413CreateApprovalRuleTemplate CreateApprovalRuleTemplateXAmzTargetEnum = "CodeCommit_20150413.CreateApprovalRuleTemplate"
)


type CreateApprovalRuleTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateApprovalRuleTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateApprovalRuleTemplateRequest struct {
    Headers CreateApprovalRuleTemplateHeaders 
    Request shared.CreateApprovalRuleTemplateInput `request:"mediaType=application/json"`
    
}

type CreateApprovalRuleTemplateResponse struct {
    ApprovalRuleTemplateContentRequiredException *interface{} 
    ApprovalRuleTemplateNameAlreadyExistsException *interface{} 
    ApprovalRuleTemplateNameRequiredException *interface{} 
    ContentType string 
    CreateApprovalRuleTemplateOutput *shared.CreateApprovalRuleTemplateOutput 
    InvalidApprovalRuleTemplateContentException *interface{} 
    InvalidApprovalRuleTemplateDescriptionException *interface{} 
    InvalidApprovalRuleTemplateNameException *interface{} 
    NumberOfRuleTemplatesExceededException *interface{} 
    StatusCode int64 
    
}

