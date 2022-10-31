package operations




type PostDescribeReservedCacheNodesOfferingsActionEnum string

const (
    PostDescribeReservedCacheNodesOfferingsActionEnumDescribeReservedCacheNodesOfferings PostDescribeReservedCacheNodesOfferingsActionEnum = "DescribeReservedCacheNodesOfferings"
)



type PostDescribeReservedCacheNodesOfferingsVersionEnum string

const (
    PostDescribeReservedCacheNodesOfferingsVersionEnumTwoThousandAndFifteen0202 PostDescribeReservedCacheNodesOfferingsVersionEnum = "2015-02-02"
)


type PostDescribeReservedCacheNodesOfferingsQueryParams struct {
    Action PostDescribeReservedCacheNodesOfferingsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeReservedCacheNodesOfferingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeReservedCacheNodesOfferingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeReservedCacheNodesOfferingsRequest struct {
    QueryParams PostDescribeReservedCacheNodesOfferingsQueryParams 
    Headers PostDescribeReservedCacheNodesOfferingsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeReservedCacheNodesOfferingsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

