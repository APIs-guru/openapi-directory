package operations

import (
"openapi/pkg/models/shared")


type GetBranchXAmzTargetEnum string

const (
    GetBranchXAmzTargetEnumCodeCommit20150413GetBranch GetBranchXAmzTargetEnum = "CodeCommit_20150413.GetBranch"
)


type GetBranchHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetBranchXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetBranchRequest struct {
    Headers GetBranchHeaders 
    Request shared.GetBranchInput `request:"mediaType=application/json"`
    
}

type GetBranchResponse struct {
    BranchDoesNotExistException *interface{} 
    BranchNameRequiredException *interface{} 
    ContentType string 
    EncryptionIntegrityChecksFailedException *interface{} 
    EncryptionKeyAccessDeniedException *interface{} 
    EncryptionKeyDisabledException *interface{} 
    EncryptionKeyNotFoundException *interface{} 
    EncryptionKeyUnavailableException *interface{} 
    GetBranchOutput *shared.GetBranchOutput 
    InvalidBranchNameException *interface{} 
    InvalidRepositoryNameException *interface{} 
    RepositoryDoesNotExistException *interface{} 
    RepositoryNameRequiredException *interface{} 
    StatusCode int64 
    
}

