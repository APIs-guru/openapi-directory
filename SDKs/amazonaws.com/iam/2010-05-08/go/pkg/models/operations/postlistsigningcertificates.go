package operations




type PostListSigningCertificatesActionEnum string

const (
    PostListSigningCertificatesActionEnumListSigningCertificates PostListSigningCertificatesActionEnum = "ListSigningCertificates"
)



type PostListSigningCertificatesVersionEnum string

const (
    PostListSigningCertificatesVersionEnumTwoThousandAndTen0508 PostListSigningCertificatesVersionEnum = "2010-05-08"
)


type PostListSigningCertificatesQueryParams struct {
    Action PostListSigningCertificatesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
    Version PostListSigningCertificatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListSigningCertificatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostListSigningCertificatesRequest struct {
    QueryParams PostListSigningCertificatesQueryParams 
    Headers PostListSigningCertificatesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostListSigningCertificatesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

