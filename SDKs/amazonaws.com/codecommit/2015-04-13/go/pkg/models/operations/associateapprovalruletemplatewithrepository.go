package operations

import (
"openapi/pkg/models/shared")


type AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum string

const (
    AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnumCodeCommit20150413AssociateApprovalRuleTemplateWithRepository AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum = "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository"
)


type AssociateApprovalRuleTemplateWithRepositoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssociateApprovalRuleTemplateWithRepositoryRequest struct {
    Headers AssociateApprovalRuleTemplateWithRepositoryHeaders 
    Request shared.AssociateApprovalRuleTemplateWithRepositoryInput `request:"mediaType=application/json"`
    
}

type AssociateApprovalRuleTemplateWithRepositoryResponse struct {
    ApprovalRuleTemplateDoesNotExistException *interface{} 
    ApprovalRuleTemplateNameRequiredException *interface{} 
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    InvalidApprovalRuleTemplateNameException *interface{} 
    InvalidRepositoryNameException *interface{} 
    MaximumRuleTemplatesAssociatedWithRepositoryException *interface{} 
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    
}

