package operations

import (
"openapi/pkg/models/shared")


type DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnum string

const (
    DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnumCodeCommit20150413DisassociateApprovalRuleTemplateFromRepository DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnum = "CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository"
)


type DisassociateApprovalRuleTemplateFromRepositoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisassociateApprovalRuleTemplateFromRepositoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisassociateApprovalRuleTemplateFromRepositoryRequest struct {
    Headers DisassociateApprovalRuleTemplateFromRepositoryHeaders 
    Request shared.DisassociateApprovalRuleTemplateFromRepositoryInput `request:"mediaType=application/json"`
    
}

type DisassociateApprovalRuleTemplateFromRepositoryResponse struct {
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
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    
}

