package operations




type PostDescribeSpotPriceHistoryActionEnum string

const (
    PostDescribeSpotPriceHistoryActionEnumDescribeSpotPriceHistory PostDescribeSpotPriceHistoryActionEnum = "DescribeSpotPriceHistory"
)



type PostDescribeSpotPriceHistoryVersionEnum string

const (
    PostDescribeSpotPriceHistoryVersionEnumTwoThousandAndSixteen1115 PostDescribeSpotPriceHistoryVersionEnum = "2016-11-15"
)


type PostDescribeSpotPriceHistoryQueryParams struct {
    Action PostDescribeSpotPriceHistoryActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeSpotPriceHistoryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeSpotPriceHistoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeSpotPriceHistoryRequest struct {
    QueryParams PostDescribeSpotPriceHistoryQueryParams 
    Headers PostDescribeSpotPriceHistoryHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeSpotPriceHistoryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

