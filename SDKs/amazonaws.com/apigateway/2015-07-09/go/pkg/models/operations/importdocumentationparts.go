package operations

import (
"openapi/pkg/models/shared")

type ImportDocumentationPartsPathParams struct {
    RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
    
}


type ImportDocumentationPartsModeEnum string

const (
    ImportDocumentationPartsModeEnumMerge ImportDocumentationPartsModeEnum = "merge"
ImportDocumentationPartsModeEnumOverwrite ImportDocumentationPartsModeEnum = "overwrite"
)


type ImportDocumentationPartsQueryParams struct {
    Failonwarnings *bool `queryParam:"style=form,explode=true,name=failonwarnings"`
    Mode *ImportDocumentationPartsModeEnum `queryParam:"style=form,explode=true,name=mode"`
    
}

type ImportDocumentationPartsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ImportDocumentationPartsRequestBody struct {
    Body string `json:"body"`
    
}

type ImportDocumentationPartsRequest struct {
    PathParams ImportDocumentationPartsPathParams 
    QueryParams ImportDocumentationPartsQueryParams 
    Headers ImportDocumentationPartsHeaders 
    Request ImportDocumentationPartsRequestBody `request:"mediaType=application/json"`
    
}

type ImportDocumentationPartsResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    DocumentationPartIds *shared.DocumentationPartIds 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

