package operations

import (
"openapi/pkg/models/shared")

type DeleteThingShadowPathParams struct {
    ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
    
}

type DeleteThingShadowQueryParams struct {
    Name *string `queryParam:"style=form,explode=true,name=name"`
    
}

type DeleteThingShadowHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteThingShadowRequest struct {
    PathParams DeleteThingShadowPathParams 
    QueryParams DeleteThingShadowQueryParams 
    Headers DeleteThingShadowHeaders 
    
}

type DeleteThingShadowResponse struct {
    ContentType string 
    DeleteThingShadowResponse *shared.DeleteThingShadowResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    MethodNotAllowedException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    UnsupportedDocumentEncodingException *interface{} 
    
}

