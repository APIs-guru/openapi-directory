package operations




type PostDescribeClientVpnEndpointsActionEnum string

const (
    PostDescribeClientVpnEndpointsActionEnumDescribeClientVpnEndpoints PostDescribeClientVpnEndpointsActionEnum = "DescribeClientVpnEndpoints"
)



type PostDescribeClientVpnEndpointsVersionEnum string

const (
    PostDescribeClientVpnEndpointsVersionEnumTwoThousandAndSixteen1115 PostDescribeClientVpnEndpointsVersionEnum = "2016-11-15"
)


type PostDescribeClientVpnEndpointsQueryParams struct {
    Action PostDescribeClientVpnEndpointsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeClientVpnEndpointsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeClientVpnEndpointsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeClientVpnEndpointsRequest struct {
    QueryParams PostDescribeClientVpnEndpointsQueryParams 
    Headers PostDescribeClientVpnEndpointsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeClientVpnEndpointsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

