package operations

import (
"openapi/pkg/models/shared")


type GetMergeCommitXAmzTargetEnum string

const (
    GetMergeCommitXAmzTargetEnumCodeCommit20150413GetMergeCommit GetMergeCommitXAmzTargetEnum = "CodeCommit_20150413.GetMergeCommit"
)


type GetMergeCommitHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetMergeCommitXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetMergeCommitRequest struct {
    Headers GetMergeCommitHeaders 
    Request shared.GetMergeCommitInput `request:"mediaType=application/json"`
    
}

type GetMergeCommitResponse struct {
    CommitDoesNotExistException *interface{} 
    CommitRequiredException *interface{} 
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    GetMergeCommitOutput *shared.GetMergeCommitOutput 
    InvalidCommitException *interface{} 
    InvalidConflictDetailLevelException *interface{} 
    InvalidConflictResolutionStrategyException *interface{} 
    InvalidRepositoryNameException *interface{} 
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    
}

