package operations

import (
"openapi/pkg/models/shared")


type GetFolderXAmzTargetEnum string

const (
    GetFolderXAmzTargetEnumCodeCommit20150413GetFolder GetFolderXAmzTargetEnum = "CodeCommit_20150413.GetFolder"
)


type GetFolderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetFolderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetFolderRequest struct {
    Headers GetFolderHeaders 
    Request shared.GetFolderInput `request:"mediaType=application/json"`
    
}

type GetFolderResponse struct {
    CommitDoesNotExistException *interface{} 
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    FolderDoesNotExistException *interface{} 
    GetFolderOutput *shared.GetFolderOutput 
    InvalidCommitException *interface{} 
    InvalidPathException *interface{} 
    InvalidRepositoryNameException *interface{} 
    PathRequiredException *interface{} 
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    
}

