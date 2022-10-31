package operations

import (
"openapi/pkg/models/shared")

type CreateDocumentationVersionPathParams struct {
    RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
    
}

type CreateDocumentationVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateDocumentationVersionRequestBody struct {
    Description *string `json:"description,omitempty"`
    DocumentationVersion string `json:"documentationVersion"`
    StageName *string `json:"stageName,omitempty"`
    
}

type CreateDocumentationVersionRequest struct {
    PathParams CreateDocumentationVersionPathParams 
    Headers CreateDocumentationVersionHeaders 
    Request CreateDocumentationVersionRequestBody `request:"mediaType=application/json"`
    
}

type CreateDocumentationVersionResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    DocumentationVersion *shared.DocumentationVersion 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

