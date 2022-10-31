package operations




type PostUploadSigningCertificateActionEnum string

const (
    PostUploadSigningCertificateActionEnumUploadSigningCertificate PostUploadSigningCertificateActionEnum = "UploadSigningCertificate"
)



type PostUploadSigningCertificateVersionEnum string

const (
    PostUploadSigningCertificateVersionEnumTwoThousandAndTen0508 PostUploadSigningCertificateVersionEnum = "2010-05-08"
)


type PostUploadSigningCertificateQueryParams struct {
    Action PostUploadSigningCertificateActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUploadSigningCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUploadSigningCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUploadSigningCertificateRequest struct {
    QueryParams PostUploadSigningCertificateQueryParams 
    Headers PostUploadSigningCertificateHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUploadSigningCertificateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

