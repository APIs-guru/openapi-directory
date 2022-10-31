package operations

import (
"openapi/pkg/models/shared")


type UpdatePullRequestApprovalStateXAmzTargetEnum string

const (
    UpdatePullRequestApprovalStateXAmzTargetEnumCodeCommit20150413UpdatePullRequestApprovalState UpdatePullRequestApprovalStateXAmzTargetEnum = "CodeCommit_20150413.UpdatePullRequestApprovalState"
)


type UpdatePullRequestApprovalStateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdatePullRequestApprovalStateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdatePullRequestApprovalStateRequest struct {
    Headers UpdatePullRequestApprovalStateHeaders 
    Request shared.UpdatePullRequestApprovalStateInput `request:"mediaType=application/json"`
    
}

type UpdatePullRequestApprovalStateResponse struct {
    ApprovalStateRequiredException *interface{} 
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    InvalidApprovalStateException *interface{} 
    InvalidPullRequestIDException *interface{} 
    InvalidRevisionIDException *interface{} 
    MaximumNumberOfApprovalsExceededException *interface{} 
    PullRequestAlreadyClosedException *interface{} 
    PullRequestCannotBeApprovedByAuthorException *interface{} 
    PullRequestDoesNotExistException *interface{} 
    PullRequestIDRequiredException *interface{} 
    RevisionIDRequiredException *interface{} 
    RevisionNotCurrentException *interface{} 
    StatusCode int64 
    
}

