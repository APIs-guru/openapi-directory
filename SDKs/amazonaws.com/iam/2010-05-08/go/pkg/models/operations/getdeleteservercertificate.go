package operations




type GetDeleteServerCertificateActionEnum string

const (
    GetDeleteServerCertificateActionEnumDeleteServerCertificate GetDeleteServerCertificateActionEnum = "DeleteServerCertificate"
)



type GetDeleteServerCertificateVersionEnum string

const (
    GetDeleteServerCertificateVersionEnumTwoThousandAndTen0508 GetDeleteServerCertificateVersionEnum = "2010-05-08"
)


type GetDeleteServerCertificateQueryParams struct {
    Action GetDeleteServerCertificateActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ServerCertificateName string `queryParam:"style=form,explode=true,name=ServerCertificateName"`
    Version GetDeleteServerCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteServerCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteServerCertificateRequest struct {
    QueryParams GetDeleteServerCertificateQueryParams 
    Headers GetDeleteServerCertificateHeaders 
    
}

type GetDeleteServerCertificateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

