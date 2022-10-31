package operations

import (
"openapi/pkg/models/shared")

type GetClientCertificatePathParams struct {
    ClientcertificateID string `pathParam:"style=simple,explode=false,name=clientcertificate_id"`
    
}

type GetClientCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetClientCertificateRequest struct {
    PathParams GetClientCertificatePathParams 
    Headers GetClientCertificateHeaders 
    
}

type GetClientCertificateResponse struct {
    BadRequestException *interface{} 
    ClientCertificate *shared.ClientCertificate 
    ContentType string 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

