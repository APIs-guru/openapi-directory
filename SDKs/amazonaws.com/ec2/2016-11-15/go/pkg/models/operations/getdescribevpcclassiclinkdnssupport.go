package operations




type GetDescribeVpcClassicLinkDNSSupportActionEnum string

const (
    GetDescribeVpcClassicLinkDNSSupportActionEnumDescribeVpcClassicLinkDNSSupport GetDescribeVpcClassicLinkDNSSupportActionEnum = "DescribeVpcClassicLinkDnsSupport"
)



type GetDescribeVpcClassicLinkDNSSupportVersionEnum string

const (
    GetDescribeVpcClassicLinkDNSSupportVersionEnumTwoThousandAndSixteen1115 GetDescribeVpcClassicLinkDNSSupportVersionEnum = "2016-11-15"
)


type GetDescribeVpcClassicLinkDNSSupportQueryParams struct {
    Action GetDescribeVpcClassicLinkDNSSupportActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version GetDescribeVpcClassicLinkDNSSupportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpcIds []string `queryParam:"style=form,explode=true,name=VpcIds"`
    
}

type GetDescribeVpcClassicLinkDNSSupportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeVpcClassicLinkDNSSupportRequest struct {
    QueryParams GetDescribeVpcClassicLinkDNSSupportQueryParams 
    Headers GetDescribeVpcClassicLinkDNSSupportHeaders 
    
}

type GetDescribeVpcClassicLinkDNSSupportResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

