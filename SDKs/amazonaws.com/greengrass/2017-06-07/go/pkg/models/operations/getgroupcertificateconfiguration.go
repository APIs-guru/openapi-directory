package operations

import (
"openapi/pkg/models/shared")

type GetGroupCertificateConfigurationPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
    
}

type GetGroupCertificateConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGroupCertificateConfigurationRequest struct {
    PathParams GetGroupCertificateConfigurationPathParams 
    Headers GetGroupCertificateConfigurationHeaders 
    
}

type GetGroupCertificateConfigurationResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetGroupCertificateConfigurationResponse *shared.GetGroupCertificateConfigurationResponse 
    InternalServerErrorException *interface{} 
    StatusCode int64 
    
}

