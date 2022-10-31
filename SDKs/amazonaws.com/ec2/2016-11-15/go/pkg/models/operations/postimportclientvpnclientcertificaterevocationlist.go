package operations




type PostImportClientVpnClientCertificateRevocationListActionEnum string

const (
    PostImportClientVpnClientCertificateRevocationListActionEnumImportClientVpnClientCertificateRevocationList PostImportClientVpnClientCertificateRevocationListActionEnum = "ImportClientVpnClientCertificateRevocationList"
)



type PostImportClientVpnClientCertificateRevocationListVersionEnum string

const (
    PostImportClientVpnClientCertificateRevocationListVersionEnumTwoThousandAndSixteen1115 PostImportClientVpnClientCertificateRevocationListVersionEnum = "2016-11-15"
)


type PostImportClientVpnClientCertificateRevocationListQueryParams struct {
    Action PostImportClientVpnClientCertificateRevocationListActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostImportClientVpnClientCertificateRevocationListVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostImportClientVpnClientCertificateRevocationListHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostImportClientVpnClientCertificateRevocationListRequest struct {
    QueryParams PostImportClientVpnClientCertificateRevocationListQueryParams 
    Headers PostImportClientVpnClientCertificateRevocationListHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostImportClientVpnClientCertificateRevocationListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

