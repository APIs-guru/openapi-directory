package operations

import (
"openapi/pkg/models/shared")


type BatchGetCommitsXAmzTargetEnum string

const (
    BatchGetCommitsXAmzTargetEnumCodeCommit20150413BatchGetCommits BatchGetCommitsXAmzTargetEnum = "CodeCommit_20150413.BatchGetCommits"
)


type BatchGetCommitsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget BatchGetCommitsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type BatchGetCommitsRequest struct {
    Headers BatchGetCommitsHeaders 
    Request shared.BatchGetCommitsInput `request:"mediaType=application/json"`
    
}

type BatchGetCommitsResponse struct {
    BatchGetCommitsOutput *shared.BatchGetCommitsOutput 
    CommitIdsLimitExceededException *interface{} 
    CommitIdsListRequiredException *interface{} 
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    InvalidRepositoryNameException *interface{} 
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    
}

