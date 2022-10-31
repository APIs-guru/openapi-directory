package operations




type PostRejectVpcEndpointConnectionsActionEnum string

const (
    PostRejectVpcEndpointConnectionsActionEnumRejectVpcEndpointConnections PostRejectVpcEndpointConnectionsActionEnum = "RejectVpcEndpointConnections"
)



type PostRejectVpcEndpointConnectionsVersionEnum string

const (
    PostRejectVpcEndpointConnectionsVersionEnumTwoThousandAndSixteen1115 PostRejectVpcEndpointConnectionsVersionEnum = "2016-11-15"
)


type PostRejectVpcEndpointConnectionsQueryParams struct {
    Action PostRejectVpcEndpointConnectionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRejectVpcEndpointConnectionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRejectVpcEndpointConnectionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRejectVpcEndpointConnectionsRequest struct {
    QueryParams PostRejectVpcEndpointConnectionsQueryParams 
    Headers PostRejectVpcEndpointConnectionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRejectVpcEndpointConnectionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

