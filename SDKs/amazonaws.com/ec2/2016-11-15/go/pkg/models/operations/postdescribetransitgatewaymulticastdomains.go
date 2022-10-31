package operations




type PostDescribeTransitGatewayMulticastDomainsActionEnum string

const (
    PostDescribeTransitGatewayMulticastDomainsActionEnumDescribeTransitGatewayMulticastDomains PostDescribeTransitGatewayMulticastDomainsActionEnum = "DescribeTransitGatewayMulticastDomains"
)



type PostDescribeTransitGatewayMulticastDomainsVersionEnum string

const (
    PostDescribeTransitGatewayMulticastDomainsVersionEnumTwoThousandAndSixteen1115 PostDescribeTransitGatewayMulticastDomainsVersionEnum = "2016-11-15"
)


type PostDescribeTransitGatewayMulticastDomainsQueryParams struct {
    Action PostDescribeTransitGatewayMulticastDomainsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeTransitGatewayMulticastDomainsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeTransitGatewayMulticastDomainsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeTransitGatewayMulticastDomainsRequest struct {
    QueryParams PostDescribeTransitGatewayMulticastDomainsQueryParams 
    Headers PostDescribeTransitGatewayMulticastDomainsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeTransitGatewayMulticastDomainsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

