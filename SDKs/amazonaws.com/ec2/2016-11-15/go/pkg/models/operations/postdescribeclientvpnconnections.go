package operations




type PostDescribeClientVpnConnectionsActionEnum string

const (
    PostDescribeClientVpnConnectionsActionEnumDescribeClientVpnConnections PostDescribeClientVpnConnectionsActionEnum = "DescribeClientVpnConnections"
)



type PostDescribeClientVpnConnectionsVersionEnum string

const (
    PostDescribeClientVpnConnectionsVersionEnumTwoThousandAndSixteen1115 PostDescribeClientVpnConnectionsVersionEnum = "2016-11-15"
)


type PostDescribeClientVpnConnectionsQueryParams struct {
    Action PostDescribeClientVpnConnectionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeClientVpnConnectionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeClientVpnConnectionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeClientVpnConnectionsRequest struct {
    QueryParams PostDescribeClientVpnConnectionsQueryParams 
    Headers PostDescribeClientVpnConnectionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeClientVpnConnectionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

