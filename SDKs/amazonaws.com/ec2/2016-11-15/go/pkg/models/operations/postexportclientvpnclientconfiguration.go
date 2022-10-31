package operations




type PostExportClientVpnClientConfigurationActionEnum string

const (
    PostExportClientVpnClientConfigurationActionEnumExportClientVpnClientConfiguration PostExportClientVpnClientConfigurationActionEnum = "ExportClientVpnClientConfiguration"
)



type PostExportClientVpnClientConfigurationVersionEnum string

const (
    PostExportClientVpnClientConfigurationVersionEnumTwoThousandAndSixteen1115 PostExportClientVpnClientConfigurationVersionEnum = "2016-11-15"
)


type PostExportClientVpnClientConfigurationQueryParams struct {
    Action PostExportClientVpnClientConfigurationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostExportClientVpnClientConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostExportClientVpnClientConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostExportClientVpnClientConfigurationRequest struct {
    QueryParams PostExportClientVpnClientConfigurationQueryParams 
    Headers PostExportClientVpnClientConfigurationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostExportClientVpnClientConfigurationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

