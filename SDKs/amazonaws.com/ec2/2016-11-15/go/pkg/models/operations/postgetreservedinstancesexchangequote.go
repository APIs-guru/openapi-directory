package operations




type PostGetReservedInstancesExchangeQuoteActionEnum string

const (
    PostGetReservedInstancesExchangeQuoteActionEnumGetReservedInstancesExchangeQuote PostGetReservedInstancesExchangeQuoteActionEnum = "GetReservedInstancesExchangeQuote"
)



type PostGetReservedInstancesExchangeQuoteVersionEnum string

const (
    PostGetReservedInstancesExchangeQuoteVersionEnumTwoThousandAndSixteen1115 PostGetReservedInstancesExchangeQuoteVersionEnum = "2016-11-15"
)


type PostGetReservedInstancesExchangeQuoteQueryParams struct {
    Action PostGetReservedInstancesExchangeQuoteActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetReservedInstancesExchangeQuoteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetReservedInstancesExchangeQuoteHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetReservedInstancesExchangeQuoteRequest struct {
    QueryParams PostGetReservedInstancesExchangeQuoteQueryParams 
    Headers PostGetReservedInstancesExchangeQuoteHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetReservedInstancesExchangeQuoteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

