package operations




type GetAuthorizeClientVpnIngressActionEnum string

const (
    GetAuthorizeClientVpnIngressActionEnumAuthorizeClientVpnIngress GetAuthorizeClientVpnIngressActionEnum = "AuthorizeClientVpnIngress"
)



type GetAuthorizeClientVpnIngressVersionEnum string

const (
    GetAuthorizeClientVpnIngressVersionEnumTwoThousandAndSixteen1115 GetAuthorizeClientVpnIngressVersionEnum = "2016-11-15"
)


type GetAuthorizeClientVpnIngressQueryParams struct {
    AccessGroupID *string `queryParam:"style=form,explode=true,name=AccessGroupId"`
    Action GetAuthorizeClientVpnIngressActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AuthorizeAllGroups *bool `queryParam:"style=form,explode=true,name=AuthorizeAllGroups"`
    ClientToken *string `queryParam:"style=form,explode=true,name=ClientToken"`
    ClientVpnEndpointID string `queryParam:"style=form,explode=true,name=ClientVpnEndpointId"`
    Description *string `queryParam:"style=form,explode=true,name=Description"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    TargetNetworkCidr string `queryParam:"style=form,explode=true,name=TargetNetworkCidr"`
    Version GetAuthorizeClientVpnIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAuthorizeClientVpnIngressHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAuthorizeClientVpnIngressRequest struct {
    QueryParams GetAuthorizeClientVpnIngressQueryParams 
    Headers GetAuthorizeClientVpnIngressHeaders 
    
}

type GetAuthorizeClientVpnIngressResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

