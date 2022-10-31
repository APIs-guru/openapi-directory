package operations

import (
"openapi/pkg/models/shared")


type GetPullRequestApprovalStatesXAmzTargetEnum string

const (
    GetPullRequestApprovalStatesXAmzTargetEnumCodeCommit20150413GetPullRequestApprovalStates GetPullRequestApprovalStatesXAmzTargetEnum = "CodeCommit_20150413.GetPullRequestApprovalStates"
)


type GetPullRequestApprovalStatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetPullRequestApprovalStatesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetPullRequestApprovalStatesRequest struct {
    Headers GetPullRequestApprovalStatesHeaders 
    Request shared.GetPullRequestApprovalStatesInput `request:"mediaType=application/json"`
    
}

type GetPullRequestApprovalStatesResponse struct {
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    GetPullRequestApprovalStatesOutput *shared.GetPullRequestApprovalStatesOutput 
    InvalidPullRequestIDException *interface{} 
    InvalidRevisionIDException *interface{} 
    PullRequestDoesNotExistException *interface{} 
    PullRequestIDRequiredException *interface{} 
    RevisionIDRequiredException *interface{} 
    StatusCode int64 
    
}

