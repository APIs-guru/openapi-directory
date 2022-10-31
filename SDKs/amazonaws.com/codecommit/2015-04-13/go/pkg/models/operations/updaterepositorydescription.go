package operations

import (
"openapi/pkg/models/shared")


type UpdateRepositoryDescriptionXAmzTargetEnum string

const (
    UpdateRepositoryDescriptionXAmzTargetEnumCodeCommit20150413UpdateRepositoryDescription UpdateRepositoryDescriptionXAmzTargetEnum = "CodeCommit_20150413.UpdateRepositoryDescription"
)


type UpdateRepositoryDescriptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateRepositoryDescriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateRepositoryDescriptionRequest struct {
    Headers UpdateRepositoryDescriptionHeaders 
    Request shared.UpdateRepositoryDescriptionInput `request:"mediaType=application/json"`
    
}

type UpdateRepositoryDescriptionResponse struct {
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    InvalidRepositoryDescriptionException *interface{} 
    InvalidRepositoryNameException *interface{} 
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    
}

