package operations




type PostDeleteVpnConnectionActionEnum string

const (
    PostDeleteVpnConnectionActionEnumDeleteVpnConnection PostDeleteVpnConnectionActionEnum = "DeleteVpnConnection"
)



type PostDeleteVpnConnectionVersionEnum string

const (
    PostDeleteVpnConnectionVersionEnumTwoThousandAndSixteen1115 PostDeleteVpnConnectionVersionEnum = "2016-11-15"
)


type PostDeleteVpnConnectionQueryParams struct {
    Action PostDeleteVpnConnectionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteVpnConnectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteVpnConnectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteVpnConnectionRequest struct {
    QueryParams PostDeleteVpnConnectionQueryParams 
    Headers PostDeleteVpnConnectionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteVpnConnectionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

