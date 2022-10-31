package operations




type GetUploadSigningCertificateActionEnum string

const (
    GetUploadSigningCertificateActionEnumUploadSigningCertificate GetUploadSigningCertificateActionEnum = "UploadSigningCertificate"
)



type GetUploadSigningCertificateVersionEnum string

const (
    GetUploadSigningCertificateVersionEnumTwoThousandAndTen0508 GetUploadSigningCertificateVersionEnum = "2010-05-08"
)


type GetUploadSigningCertificateQueryParams struct {
    Action GetUploadSigningCertificateActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CertificateBody string `queryParam:"style=form,explode=true,name=CertificateBody"`
    UserName *string `queryParam:"style=form,explode=true,name=UserName"`
    Version GetUploadSigningCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetUploadSigningCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetUploadSigningCertificateRequest struct {
    QueryParams GetUploadSigningCertificateQueryParams 
    Headers GetUploadSigningCertificateHeaders 
    
}

type GetUploadSigningCertificateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

