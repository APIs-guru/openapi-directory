package operations

import (
"openapi/pkg/models/shared")


type UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum string

const (
    UpdateApprovalRuleTemplateDescriptionXAmzTargetEnumCodeCommit20150413UpdateApprovalRuleTemplateDescription UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum = "CodeCommit_20150413.UpdateApprovalRuleTemplateDescription"
)


type UpdateApprovalRuleTemplateDescriptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateApprovalRuleTemplateDescriptionRequest struct {
    Headers UpdateApprovalRuleTemplateDescriptionHeaders 
    Request shared.UpdateApprovalRuleTemplateDescriptionInput `request:"mediaType=application/json"`
    
}

type UpdateApprovalRuleTemplateDescriptionResponse struct {
    ApprovalRuleTemplateDoesNotExistException *interface{} 
    ApprovalRuleTemplateNameRequiredException *interface{} 
    ContentType string 
    InvalidApprovalRuleTemplateDescriptionException *interface{} 
    InvalidApprovalRuleTemplateNameException *interface{} 
    StatusCode int64 
    UpdateApprovalRuleTemplateDescriptionOutput *shared.UpdateApprovalRuleTemplateDescriptionOutput 
    
}

