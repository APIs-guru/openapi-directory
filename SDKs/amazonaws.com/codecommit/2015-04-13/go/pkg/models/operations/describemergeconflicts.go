package operations

import (
"openapi/pkg/models/shared")

type DescribeMergeConflictsQueryParams struct {
    MaxMergeHunks *string `queryParam:"style=form,explode=true,name=maxMergeHunks"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type DescribeMergeConflictsXAmzTargetEnum string

const (
    DescribeMergeConflictsXAmzTargetEnumCodeCommit20150413DescribeMergeConflicts DescribeMergeConflictsXAmzTargetEnum = "CodeCommit_20150413.DescribeMergeConflicts"
)


type DescribeMergeConflictsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeMergeConflictsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeMergeConflictsRequest struct {
    QueryParams DescribeMergeConflictsQueryParams 
    Headers DescribeMergeConflictsHeaders 
    Request shared.DescribeMergeConflictsInput `request:"mediaType=application/json"`
    
}

type DescribeMergeConflictsResponse struct {
    CommitDoesNotExistException *interface{} 
    CommitRequiredException *interface{} 
    ContentType string 
    DescribeMergeConflictsOutput *shared.DescribeMergeConflictsOutput 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    FileDoesNotExistException *interface{} 
    InvalidCommitException *interface{} 
    InvalidConflictDetailLevelException *interface{} 
    InvalidConflictResolutionStrategyException *interface{} 
    InvalidContinuationTokenException *interface{} 
    InvalidMaxMergeHunksException *interface{} 
    InvalidMergeOptionException *interface{} 
    InvalidPathException *interface{} 
    InvalidRepositoryNameException *interface{} 
    MaximumFileContentToLoadExceededException *interface{} 
    MaximumItemsToCompareExceededException *interface{} 
    MergeOptionRequiredException *interface{} 
    PathRequiredException *interface{} 
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    TipsDivergenceExceededException *interface{} 
    
}

