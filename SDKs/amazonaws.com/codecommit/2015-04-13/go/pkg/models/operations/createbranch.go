package operations

import (
"openapi/pkg/models/shared")


type CreateBranchXAmzTargetEnum string

const (
    CreateBranchXAmzTargetEnumCodeCommit20150413CreateBranch CreateBranchXAmzTargetEnum = "CodeCommit_20150413.CreateBranch"
)


type CreateBranchHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateBranchXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateBranchRequest struct {
    Headers CreateBranchHeaders 
    Request shared.CreateBranchInput `request:"mediaType=application/json"`
    
}

type CreateBranchResponse struct {
    BranchNameExistsException *interface{} 
    BranchNameRequiredException *interface{} 
    CommitDoesNotExistException *interface{} 
    CommitIDRequiredException *interface{} 
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    InvalidBranchNameException *interface{} 
    InvalidCommitIDException *interface{} 
    InvalidRepositoryNameException *interface{} 
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    
}

