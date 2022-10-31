package operations




type GetDescribeReservedCacheNodesOfferingsActionEnum string

const (
    GetDescribeReservedCacheNodesOfferingsActionEnumDescribeReservedCacheNodesOfferings GetDescribeReservedCacheNodesOfferingsActionEnum = "DescribeReservedCacheNodesOfferings"
)



type GetDescribeReservedCacheNodesOfferingsVersionEnum string

const (
    GetDescribeReservedCacheNodesOfferingsVersionEnumTwoThousandAndFifteen0202 GetDescribeReservedCacheNodesOfferingsVersionEnum = "2015-02-02"
)


type GetDescribeReservedCacheNodesOfferingsQueryParams struct {
    Action GetDescribeReservedCacheNodesOfferingsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CacheNodeType *string `queryParam:"style=form,explode=true,name=CacheNodeType"`
    Duration *string `queryParam:"style=form,explode=true,name=Duration"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    OfferingType *string `queryParam:"style=form,explode=true,name=OfferingType"`
    ProductDescription *string `queryParam:"style=form,explode=true,name=ProductDescription"`
    ReservedCacheNodesOfferingID *string `queryParam:"style=form,explode=true,name=ReservedCacheNodesOfferingId"`
    Version GetDescribeReservedCacheNodesOfferingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeReservedCacheNodesOfferingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeReservedCacheNodesOfferingsRequest struct {
    QueryParams GetDescribeReservedCacheNodesOfferingsQueryParams 
    Headers GetDescribeReservedCacheNodesOfferingsHeaders 
    
}

type GetDescribeReservedCacheNodesOfferingsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

