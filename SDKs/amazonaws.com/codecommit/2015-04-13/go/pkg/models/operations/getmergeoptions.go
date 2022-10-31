package operations

import (
"openapi/pkg/models/shared")


type GetMergeOptionsXAmzTargetEnum string

const (
    GetMergeOptionsXAmzTargetEnumCodeCommit20150413GetMergeOptions GetMergeOptionsXAmzTargetEnum = "CodeCommit_20150413.GetMergeOptions"
)


type GetMergeOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetMergeOptionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetMergeOptionsRequest struct {
    Headers GetMergeOptionsHeaders 
    Request shared.GetMergeOptionsInput `request:"mediaType=application/json"`
    
}

type GetMergeOptionsResponse struct {
    CommitDoesNotExistException *interface{} 
    CommitRequiredException *interface{} 
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    GetMergeOptionsOutput *shared.GetMergeOptionsOutput 
    InvalidCommitException *interface{} 
    InvalidConflictDetailLevelException *interface{} 
    InvalidConflictResolutionStrategyException *interface{} 
    InvalidRepositoryNameException *interface{} 
    MaximumFileContentToLoadExceededException *interface{} 
    MaximumItemsToCompareExceededException *interface{} 
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    TipsDivergenceExceededException *interface{} 
    
}

