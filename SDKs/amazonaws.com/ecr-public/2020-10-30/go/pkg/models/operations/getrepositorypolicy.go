package operations

import (
"openapi/pkg/models/shared")


type GetRepositoryPolicyXAmzTargetEnum string

const (
    GetRepositoryPolicyXAmzTargetEnumSpencerFrontendServiceGetRepositoryPolicy GetRepositoryPolicyXAmzTargetEnum = "SpencerFrontendService.GetRepositoryPolicy"
)


type GetRepositoryPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetRepositoryPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetRepositoryPolicyRequest struct {
    Headers GetRepositoryPolicyHeaders 
    Request shared.GetRepositoryPolicyRequest `request:"mediaType=application/json"`
    
}

type GetRepositoryPolicyResponse struct {
    ContentType string 
    GetRepositoryPolicyResponse *shared.GetRepositoryPolicyResponse 
    InvalidParameterException *interface{} 
    RepositoryNotFoundException *interface{} 
    RepositoryPolicyNotFoundException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

