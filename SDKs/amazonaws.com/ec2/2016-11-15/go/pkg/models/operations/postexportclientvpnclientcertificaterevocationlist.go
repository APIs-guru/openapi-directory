package operations




type PostExportClientVpnClientCertificateRevocationListActionEnum string

const (
    PostExportClientVpnClientCertificateRevocationListActionEnumExportClientVpnClientCertificateRevocationList PostExportClientVpnClientCertificateRevocationListActionEnum = "ExportClientVpnClientCertificateRevocationList"
)



type PostExportClientVpnClientCertificateRevocationListVersionEnum string

const (
    PostExportClientVpnClientCertificateRevocationListVersionEnumTwoThousandAndSixteen1115 PostExportClientVpnClientCertificateRevocationListVersionEnum = "2016-11-15"
)


type PostExportClientVpnClientCertificateRevocationListQueryParams struct {
    Action PostExportClientVpnClientCertificateRevocationListActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostExportClientVpnClientCertificateRevocationListVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostExportClientVpnClientCertificateRevocationListHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostExportClientVpnClientCertificateRevocationListRequest struct {
    QueryParams PostExportClientVpnClientCertificateRevocationListQueryParams 
    Headers PostExportClientVpnClientCertificateRevocationListHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostExportClientVpnClientCertificateRevocationListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

