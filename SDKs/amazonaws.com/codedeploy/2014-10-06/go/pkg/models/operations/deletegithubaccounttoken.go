package operations

import (
"openapi/pkg/models/shared")


type DeleteGitHubAccountTokenXAmzTargetEnum string

const (
    DeleteGitHubAccountTokenXAmzTargetEnumCodeDeploy20141006DeleteGitHubAccountToken DeleteGitHubAccountTokenXAmzTargetEnum = "CodeDeploy_20141006.DeleteGitHubAccountToken"
)


type DeleteGitHubAccountTokenHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteGitHubAccountTokenXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteGitHubAccountTokenRequest struct {
    Headers DeleteGitHubAccountTokenHeaders 
    Request shared.DeleteGitHubAccountTokenInput `request:"mediaType=application/json"`
    
}

type DeleteGitHubAccountTokenResponse struct {
    ContentType string 
    DeleteGitHubAccountTokenOutput *shared.DeleteGitHubAccountTokenOutput 
    GitHubAccountTokenDoesNotExistException *interface{} 
    GitHubAccountTokenNameRequiredException *interface{} 
    InvalidGitHubAccountTokenNameException *interface{} 
    OperationNotSupportedException *interface{} 
    ResourceValidationException *interface{} 
    StatusCode int64 
    
}

