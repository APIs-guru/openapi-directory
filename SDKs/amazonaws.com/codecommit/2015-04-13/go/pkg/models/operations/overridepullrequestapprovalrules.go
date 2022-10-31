package operations

import (
"openapi/pkg/models/shared")


type OverridePullRequestApprovalRulesXAmzTargetEnum string

const (
    OverridePullRequestApprovalRulesXAmzTargetEnumCodeCommit20150413OverridePullRequestApprovalRules OverridePullRequestApprovalRulesXAmzTargetEnum = "CodeCommit_20150413.OverridePullRequestApprovalRules"
)


type OverridePullRequestApprovalRulesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget OverridePullRequestApprovalRulesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type OverridePullRequestApprovalRulesRequest struct {
    Headers OverridePullRequestApprovalRulesHeaders 
    Request shared.OverridePullRequestApprovalRulesInput `request:"mediaType=application/json"`
    
}

type OverridePullRequestApprovalRulesResponse struct {
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    InvalidOverrideStatusException *interface{} 
    InvalidPullRequestIDException *interface{} 
    InvalidRevisionIDException *interface{} 
    OverrideAlreadySetException *interface{} 
    OverrideStatusRequiredException *interface{} 
    PullRequestAlreadyClosedException *interface{} 
    PullRequestDoesNotExistException *interface{} 
    PullRequestIDRequiredException *interface{} 
    RevisionIDRequiredException *interface{} 
    RevisionNotCurrentException *interface{} 
    StatusCode int64 
    
}

