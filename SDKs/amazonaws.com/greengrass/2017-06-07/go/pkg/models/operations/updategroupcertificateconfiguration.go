package operations

import (
"openapi/pkg/models/shared")

type UpdateGroupCertificateConfigurationPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
    
}

type UpdateGroupCertificateConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateGroupCertificateConfigurationRequestBody struct {
    CertificateExpiryInMilliseconds *string `json:"CertificateExpiryInMilliseconds,omitempty"`
    
}

type UpdateGroupCertificateConfigurationRequest struct {
    PathParams UpdateGroupCertificateConfigurationPathParams 
    Headers UpdateGroupCertificateConfigurationHeaders 
    Request UpdateGroupCertificateConfigurationRequestBody `request:"mediaType=application/json"`
    
}

type UpdateGroupCertificateConfigurationResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    InternalServerErrorException *interface{} 
    StatusCode int64 
    UpdateGroupCertificateConfigurationResponse *shared.UpdateGroupCertificateConfigurationResponse 
    
}

