package operations

import (
"openapi/pkg/models/shared")

type GetMergeConflictsQueryParams struct {
    MaxConflictFiles *string `queryParam:"style=form,explode=true,name=maxConflictFiles"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type GetMergeConflictsXAmzTargetEnum string

const (
    GetMergeConflictsXAmzTargetEnumCodeCommit20150413GetMergeConflicts GetMergeConflictsXAmzTargetEnum = "CodeCommit_20150413.GetMergeConflicts"
)


type GetMergeConflictsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetMergeConflictsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetMergeConflictsRequest struct {
    QueryParams GetMergeConflictsQueryParams 
    Headers GetMergeConflictsHeaders 
    Request shared.GetMergeConflictsInput `request:"mediaType=application/json"`
    
}

type GetMergeConflictsResponse struct {
    CommitDoesNotExistException *interface{} 
    CommitRequiredException *interface{} 
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    GetMergeConflictsOutput *shared.GetMergeConflictsOutput 
    InvalidCommitException *interface{} 
    InvalidConflictDetailLevelException *interface{} 
    InvalidConflictResolutionStrategyException *interface{} 
    InvalidContinuationTokenException *interface{} 
    InvalidDestinationCommitSpecifierException *interface{} 
    InvalidMaxConflictFilesException *interface{} 
    InvalidMergeOptionException *interface{} 
    InvalidRepositoryNameException *interface{} 
    InvalidSourceCommitSpecifierException *interface{} 
    MaximumFileContentToLoadExceededException *interface{} 
    MaximumItemsToCompareExceededException *interface{} 
    MergeOptionRequiredException *interface{} 
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    TipsDivergenceExceededException *interface{} 
    
}

