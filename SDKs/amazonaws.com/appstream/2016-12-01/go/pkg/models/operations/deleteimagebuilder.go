package operations

import (
"openapi/pkg/models/shared")


type DeleteImageBuilderXAmzTargetEnum string

const (
    DeleteImageBuilderXAmzTargetEnumPhotonAdminProxyServiceDeleteImageBuilder DeleteImageBuilderXAmzTargetEnum = "PhotonAdminProxyService.DeleteImageBuilder"
)


type DeleteImageBuilderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteImageBuilderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteImageBuilderRequest struct {
    Headers DeleteImageBuilderHeaders 
    Request shared.DeleteImageBuilderRequest `request:"mediaType=application/json"`
    
}

type DeleteImageBuilderResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    DeleteImageBuilderResult *shared.DeleteImageBuilderResult 
    OperationNotPermittedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

