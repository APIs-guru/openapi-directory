package operations

import (
"openapi/pkg/models/shared")

type GetGroupCertificateAuthorityPathParams struct {
    CertificateAuthorityID string `pathParam:"style=simple,explode=false,name=CertificateAuthorityId"`
    GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
    
}

type GetGroupCertificateAuthorityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGroupCertificateAuthorityRequest struct {
    PathParams GetGroupCertificateAuthorityPathParams 
    Headers GetGroupCertificateAuthorityHeaders 
    
}

type GetGroupCertificateAuthorityResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetGroupCertificateAuthorityResponse *shared.GetGroupCertificateAuthorityResponse 
    InternalServerErrorException *interface{} 
    StatusCode int64 
    
}

