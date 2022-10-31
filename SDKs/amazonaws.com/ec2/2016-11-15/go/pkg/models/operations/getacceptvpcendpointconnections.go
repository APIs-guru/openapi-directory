package operations




type GetAcceptVpcEndpointConnectionsActionEnum string

const (
    GetAcceptVpcEndpointConnectionsActionEnumAcceptVpcEndpointConnections GetAcceptVpcEndpointConnectionsActionEnum = "AcceptVpcEndpointConnections"
)



type GetAcceptVpcEndpointConnectionsVersionEnum string

const (
    GetAcceptVpcEndpointConnectionsVersionEnumTwoThousandAndSixteen1115 GetAcceptVpcEndpointConnectionsVersionEnum = "2016-11-15"
)


type GetAcceptVpcEndpointConnectionsQueryParams struct {
    Action GetAcceptVpcEndpointConnectionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    ServiceID string `queryParam:"style=form,explode=true,name=ServiceId"`
    Version GetAcceptVpcEndpointConnectionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpcEndpointID []string `queryParam:"style=form,explode=true,name=VpcEndpointId"`
    
}

type GetAcceptVpcEndpointConnectionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAcceptVpcEndpointConnectionsRequest struct {
    QueryParams GetAcceptVpcEndpointConnectionsQueryParams 
    Headers GetAcceptVpcEndpointConnectionsHeaders 
    
}

type GetAcceptVpcEndpointConnectionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

