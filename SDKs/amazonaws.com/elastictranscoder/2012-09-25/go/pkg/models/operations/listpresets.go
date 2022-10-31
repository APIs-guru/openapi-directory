package operations

import (
"openapi/pkg/models/shared")

type ListPresetsQueryParams struct {
    Ascending *string `queryParam:"style=form,explode=true,name=Ascending"`
    PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
    
}

type ListPresetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListPresetsRequest struct {
    QueryParams ListPresetsQueryParams 
    Headers ListPresetsHeaders 
    
}

type ListPresetsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    IncompatibleVersionException *interface{} 
    InternalServiceException *interface{} 
    ListPresetsResponse *shared.ListPresetsResponse 
    StatusCode int64 
    ValidationException *interface{} 
    
}

