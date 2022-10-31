package operations

import (
"openapi/pkg/models/shared")

type GetDeploymentPathParams struct {
    DeploymentID string `pathParam:"style=simple,explode=false,name=deployment_id"`
    RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
    
}

type GetDeploymentQueryParams struct {
    Embed []string `queryParam:"style=form,explode=true,name=embed"`
    
}

type GetDeploymentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeploymentRequest struct {
    PathParams GetDeploymentPathParams 
    QueryParams GetDeploymentQueryParams 
    Headers GetDeploymentHeaders 
    
}

type GetDeploymentResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    Deployment *shared.Deployment 
    NotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

