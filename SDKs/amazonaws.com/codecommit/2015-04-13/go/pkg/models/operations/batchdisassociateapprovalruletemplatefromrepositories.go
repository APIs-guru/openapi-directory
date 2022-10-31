package operations

import (
"openapi/pkg/models/shared")


type BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum string

const (
    BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnumCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositories BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum = "CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories"
)


type BatchDisassociateApprovalRuleTemplateFromRepositoriesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest struct {
    Headers BatchDisassociateApprovalRuleTemplateFromRepositoriesHeaders 
    Request shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput `request:"mediaType=application/json"`
    
}

type BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse struct {
    ApprovalRuleTemplateDoesNotExistException *interface{} 
    ApprovalRuleTemplateNameRequiredException *interface{} 
    BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput *shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput 
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    InvalidApprovalRuleTemplateNameException *interface{} 
    MaximumRepositoryNamesExceededException *interface{} 
    RepositoryNamesRequiredException *interface{} 
    StatusCode int64 
    
}

