package operations

import (
"openapi/pkg/models/shared")


type CreateRepositoryXAmzTargetEnum string

const (
    CreateRepositoryXAmzTargetEnumCodeCommit20150413CreateRepository CreateRepositoryXAmzTargetEnum = "CodeCommit_20150413.CreateRepository"
)


type CreateRepositoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateRepositoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateRepositoryRequest struct {
    Headers CreateRepositoryHeaders 
    Request shared.CreateRepositoryInput `request:"mediaType=application/json"`
    
}

type CreateRepositoryResponse struct {
    ContentType string 
    CreateRepositoryOutput *shared.CreateRepositoryOutput 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    InvalidRepositoryDescriptionException *interface{} 
    InvalidRepositoryNameException *interface{} 
    InvalidSystemTagUsageException *interface{} 
    InvalidTagsMapException *interface{} 
    RepositoryLimitExceededException *interface{} 
    RepositoryNameExistsException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    TagPolicyException *interface{} 
    TooManyTagsException *interface{} 
    
}

