package operations

import (
"openapi/pkg/models/shared")

type GetCommentsForComparedCommitQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type GetCommentsForComparedCommitXAmzTargetEnum string

const (
    GetCommentsForComparedCommitXAmzTargetEnumCodeCommit20150413GetCommentsForComparedCommit GetCommentsForComparedCommitXAmzTargetEnum = "CodeCommit_20150413.GetCommentsForComparedCommit"
)


type GetCommentsForComparedCommitHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetCommentsForComparedCommitXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetCommentsForComparedCommitRequest struct {
    QueryParams GetCommentsForComparedCommitQueryParams 
    Headers GetCommentsForComparedCommitHeaders 
    Request shared.GetCommentsForComparedCommitInput `request:"mediaType=application/json"`
    
}

type GetCommentsForComparedCommitResponse struct {
    CommitDoesNotExistException *interface{} 
    CommitIDRequiredException *interface{} 
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    GetCommentsForComparedCommitOutput *shared.GetCommentsForComparedCommitOutput 
    InvalidCommitIDException *interface{} 
    InvalidContinuationTokenException *interface{} 
    InvalidMaxResultsException *interface{} 
    InvalidRepositoryNameException *interface{} 
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    
}

