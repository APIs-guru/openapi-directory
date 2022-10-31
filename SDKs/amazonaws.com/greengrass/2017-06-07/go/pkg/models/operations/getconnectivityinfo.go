package operations

import (
"openapi/pkg/models/shared")

type GetConnectivityInfoPathParams struct {
    ThingName string `pathParam:"style=simple,explode=false,name=ThingName"`
    
}

type GetConnectivityInfoHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetConnectivityInfoRequest struct {
    PathParams GetConnectivityInfoPathParams 
    Headers GetConnectivityInfoHeaders 
    
}

type GetConnectivityInfoResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetConnectivityInfoResponse *shared.GetConnectivityInfoResponse 
    InternalServerErrorException *interface{} 
    StatusCode int64 
    
}

