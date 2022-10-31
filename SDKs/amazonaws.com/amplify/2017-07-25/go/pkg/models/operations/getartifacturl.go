package operations

import (
"openapi/pkg/models/shared")

type GetArtifactURLPathParams struct {
    ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
    
}

type GetArtifactURLHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetArtifactURLRequest struct {
    PathParams GetArtifactURLPathParams 
    Headers GetArtifactURLHeaders 
    
}

type GetArtifactURLResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetArtifactURLResult *shared.GetArtifactURLResult 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

