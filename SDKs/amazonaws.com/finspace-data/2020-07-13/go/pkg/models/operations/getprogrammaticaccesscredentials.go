package operations

import (
"openapi/pkg/models/shared")

type GetProgrammaticAccessCredentialsQueryParams struct {
    DurationInMinutes *int64 `queryParam:"style=form,explode=true,name=durationInMinutes"`
    EnvironmentID string `queryParam:"style=form,explode=true,name=environmentId"`
    
}

type GetProgrammaticAccessCredentialsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetProgrammaticAccessCredentialsRequest struct {
    QueryParams GetProgrammaticAccessCredentialsQueryParams 
    Headers GetProgrammaticAccessCredentialsHeaders 
    
}

type GetProgrammaticAccessCredentialsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetProgrammaticAccessCredentialsResponse *shared.GetProgrammaticAccessCredentialsResponse 
    InternalServerException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

