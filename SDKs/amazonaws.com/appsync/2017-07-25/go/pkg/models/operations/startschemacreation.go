package operations

import (
"openapi/pkg/models/shared")

type StartSchemaCreationPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    
}

type StartSchemaCreationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type StartSchemaCreationRequestBody struct {
    Definition string `json:"definition"`
    
}

type StartSchemaCreationRequest struct {
    PathParams StartSchemaCreationPathParams 
    Headers StartSchemaCreationHeaders 
    Request StartSchemaCreationRequestBody `request:"mediaType=application/json"`
    
}

type StartSchemaCreationResponse struct {
    BadRequestException *interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    NotFoundException *interface{} 
    StartSchemaCreationResponse *shared.StartSchemaCreationResponse 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

