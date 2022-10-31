package operations




type PostApplySecurityGroupsToClientVpnTargetNetworkActionEnum string

const (
    PostApplySecurityGroupsToClientVpnTargetNetworkActionEnumApplySecurityGroupsToClientVpnTargetNetwork PostApplySecurityGroupsToClientVpnTargetNetworkActionEnum = "ApplySecurityGroupsToClientVpnTargetNetwork"
)



type PostApplySecurityGroupsToClientVpnTargetNetworkVersionEnum string

const (
    PostApplySecurityGroupsToClientVpnTargetNetworkVersionEnumTwoThousandAndSixteen1115 PostApplySecurityGroupsToClientVpnTargetNetworkVersionEnum = "2016-11-15"
)


type PostApplySecurityGroupsToClientVpnTargetNetworkQueryParams struct {
    Action PostApplySecurityGroupsToClientVpnTargetNetworkActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostApplySecurityGroupsToClientVpnTargetNetworkVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostApplySecurityGroupsToClientVpnTargetNetworkHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostApplySecurityGroupsToClientVpnTargetNetworkRequest struct {
    QueryParams PostApplySecurityGroupsToClientVpnTargetNetworkQueryParams 
    Headers PostApplySecurityGroupsToClientVpnTargetNetworkHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostApplySecurityGroupsToClientVpnTargetNetworkResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

