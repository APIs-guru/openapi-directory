package operations

import (
"openapi/pkg/models/shared")


type MergePullRequestBySquashXAmzTargetEnum string

const (
    MergePullRequestBySquashXAmzTargetEnumCodeCommit20150413MergePullRequestBySquash MergePullRequestBySquashXAmzTargetEnum = "CodeCommit_20150413.MergePullRequestBySquash"
)


type MergePullRequestBySquashHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget MergePullRequestBySquashXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type MergePullRequestBySquashRequest struct {
    Headers MergePullRequestBySquashHeaders 
    Request shared.MergePullRequestBySquashInput `request:"mediaType=application/json"`
    
}

type MergePullRequestBySquashResponse struct {
    CommitMessageLengthExceededException *interface{} 
    ConcurrentReferenceUpdateException *interface{} 
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    FileContentSizeLimitExceededException *interface{} 
    FolderContentSizeLimitExceededException *interface{} 
    InvalidCommitIDException *interface{} 
    InvalidConflictDetailLevelException *interface{} 
    InvalidConflictResolutionException *interface{} 
    InvalidConflictResolutionStrategyException *interface{} 
    InvalidEmailException *interface{} 
    InvalidFileModeException *interface{} 
    InvalidPathException *interface{} 
    InvalidPullRequestIDException *interface{} 
    InvalidReplacementContentException *interface{} 
    InvalidReplacementTypeException *interface{} 
    InvalidRepositoryNameException *interface{} 
    ManualMergeRequiredException *interface{} 
    MaximumConflictResolutionEntriesExceededException *interface{} 
    MaximumFileContentToLoadExceededException *interface{} 
    MaximumItemsToCompareExceededException *interface{} 
    MergePullRequestBySquashOutput *shared.MergePullRequestBySquashOutput 
    MultipleConflictResolutionEntriesException *interface{} 
    NameLengthExceededException *interface{} 
    PathRequiredException *interface{} 
    PullRequestAlreadyClosedException *interface{} 
    PullRequestApprovalRulesNotSatisfiedException *interface{} 
    PullRequestDoesNotExistException *interface{} 
    PullRequestIDRequiredException *interface{} 
    ReplacementContentRequiredException *interface{} 
    ReplacementTypeRequiredException *interface{} 
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    RepositoryNotAssociatedWithPullRequestException *interface{} 
    StatusCode int64 
    TipOfSourceReferenceIsDifferentException *interface{} 
    TipsDivergenceExceededException *interface{} 
    
}

