package operations




type PostListServerCertificatesActionEnum string

const (
    PostListServerCertificatesActionEnumListServerCertificates PostListServerCertificatesActionEnum = "ListServerCertificates"
)



type PostListServerCertificatesVersionEnum string

const (
    PostListServerCertificatesVersionEnumTwoThousandAndTen0508 PostListServerCertificatesVersionEnum = "2010-05-08"
)


type PostListServerCertificatesQueryParams struct {
    Action PostListServerCertificatesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
    Version PostListServerCertificatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListServerCertificatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostListServerCertificatesRequest struct {
    QueryParams PostListServerCertificatesQueryParams 
    Headers PostListServerCertificatesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostListServerCertificatesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

