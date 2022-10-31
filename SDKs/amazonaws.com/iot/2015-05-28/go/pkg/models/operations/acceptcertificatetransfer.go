package operations



type AcceptCertificateTransferPathParams struct {
    CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
    
}

type AcceptCertificateTransferQueryParams struct {
    SetAsActive *bool `queryParam:"style=form,explode=true,name=setAsActive"`
    
}

type AcceptCertificateTransferHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type AcceptCertificateTransferRequest struct {
    PathParams AcceptCertificateTransferPathParams 
    QueryParams AcceptCertificateTransferQueryParams 
    Headers AcceptCertificateTransferHeaders 
    
}

type AcceptCertificateTransferResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    TransferAlreadyCompletedException *interface{} 
    UnauthorizedException *interface{} 
    
}

