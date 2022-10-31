package operations

import (
"openapi/pkg/models/shared")

type GetDifferencesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type GetDifferencesXAmzTargetEnum string

const (
    GetDifferencesXAmzTargetEnumCodeCommit20150413GetDifferences GetDifferencesXAmzTargetEnum = "CodeCommit_20150413.GetDifferences"
)


type GetDifferencesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDifferencesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDifferencesRequest struct {
    QueryParams GetDifferencesQueryParams 
    Headers GetDifferencesHeaders 
    Request shared.GetDifferencesInput `request:"mediaType=application/json"`
    
}

type GetDifferencesResponse struct {
    CommitDoesNotExistException *interface{} 
    CommitRequiredException *interface{} 
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    GetDifferencesOutput *shared.GetDifferencesOutput 
    InvalidCommitException *interface{} 
    InvalidCommitIDException *interface{} 
    InvalidContinuationTokenException *interface{} 
    InvalidMaxResultsException *interface{} 
    InvalidPathException *interface{} 
    InvalidRepositoryNameException *interface{} 
    PathDoesNotExistException *interface{} 
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    
}

