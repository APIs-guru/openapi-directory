package operations




type PostAcceptVpcEndpointConnectionsActionEnum string

const (
    PostAcceptVpcEndpointConnectionsActionEnumAcceptVpcEndpointConnections PostAcceptVpcEndpointConnectionsActionEnum = "AcceptVpcEndpointConnections"
)



type PostAcceptVpcEndpointConnectionsVersionEnum string

const (
    PostAcceptVpcEndpointConnectionsVersionEnumTwoThousandAndSixteen1115 PostAcceptVpcEndpointConnectionsVersionEnum = "2016-11-15"
)


type PostAcceptVpcEndpointConnectionsQueryParams struct {
    Action PostAcceptVpcEndpointConnectionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAcceptVpcEndpointConnectionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAcceptVpcEndpointConnectionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAcceptVpcEndpointConnectionsRequest struct {
    QueryParams PostAcceptVpcEndpointConnectionsQueryParams 
    Headers PostAcceptVpcEndpointConnectionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAcceptVpcEndpointConnectionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

