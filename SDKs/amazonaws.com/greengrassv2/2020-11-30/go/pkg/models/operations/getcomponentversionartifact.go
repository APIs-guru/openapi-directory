package operations

import (
"openapi/pkg/models/shared")

type GetComponentVersionArtifactPathParams struct {
    Arn string `pathParam:"style=simple,explode=false,name=arn"`
    ArtifactName string `pathParam:"style=simple,explode=false,name=artifactName"`
    
}

type GetComponentVersionArtifactHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetComponentVersionArtifactRequest struct {
    PathParams GetComponentVersionArtifactPathParams 
    Headers GetComponentVersionArtifactHeaders 
    
}

type GetComponentVersionArtifactResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetComponentVersionArtifactResponse *shared.GetComponentVersionArtifactResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

