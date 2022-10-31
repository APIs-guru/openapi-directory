package operations

import (
"openapi/pkg/models/shared")


type MergeBranchesByFastForwardXAmzTargetEnum string

const (
    MergeBranchesByFastForwardXAmzTargetEnumCodeCommit20150413MergeBranchesByFastForward MergeBranchesByFastForwardXAmzTargetEnum = "CodeCommit_20150413.MergeBranchesByFastForward"
)


type MergeBranchesByFastForwardHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget MergeBranchesByFastForwardXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type MergeBranchesByFastForwardRequest struct {
    Headers MergeBranchesByFastForwardHeaders 
    Request shared.MergeBranchesByFastForwardInput `request:"mediaType=application/json"`
    
}

type MergeBranchesByFastForwardResponse struct {
    BranchDoesNotExistException *interface{} 
    BranchNameIsTagNameException *interface{} 
    BranchNameRequiredException *interface{} 
    CommitDoesNotExistException *interface{} 
    CommitRequiredException *interface{} 
    ConcurrentReferenceUpdateException *interface{} 
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    InvalidBranchNameException *interface{} 
    InvalidCommitException *interface{} 
    InvalidRepositoryNameException *interface{} 
    InvalidTargetBranchException *interface{} 
    ManualMergeRequiredException *interface{} 
    MergeBranchesByFastForwardOutput *shared.MergeBranchesByFastForwardOutput 
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    TipsDivergenceExceededException *interface{} 
    
}

