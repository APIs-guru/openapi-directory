package operations

import (
"openapi/pkg/models/shared")

type GetDeviceDefinitionVersionPathParams struct {
    DeviceDefinitionID string `pathParam:"style=simple,explode=false,name=DeviceDefinitionId"`
    DeviceDefinitionVersionID string `pathParam:"style=simple,explode=false,name=DeviceDefinitionVersionId"`
    
}

type GetDeviceDefinitionVersionQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type GetDeviceDefinitionVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeviceDefinitionVersionRequest struct {
    PathParams GetDeviceDefinitionVersionPathParams 
    QueryParams GetDeviceDefinitionVersionQueryParams 
    Headers GetDeviceDefinitionVersionHeaders 
    
}

type GetDeviceDefinitionVersionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetDeviceDefinitionVersionResponse *shared.GetDeviceDefinitionVersionResponse 
    StatusCode int64 
    
}

