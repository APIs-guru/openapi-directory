package operations




type PostPurchaseReservedCacheNodesOfferingActionEnum string

const (
    PostPurchaseReservedCacheNodesOfferingActionEnumPurchaseReservedCacheNodesOffering PostPurchaseReservedCacheNodesOfferingActionEnum = "PurchaseReservedCacheNodesOffering"
)



type PostPurchaseReservedCacheNodesOfferingVersionEnum string

const (
    PostPurchaseReservedCacheNodesOfferingVersionEnumTwoThousandAndFifteen0202 PostPurchaseReservedCacheNodesOfferingVersionEnum = "2015-02-02"
)


type PostPurchaseReservedCacheNodesOfferingQueryParams struct {
    Action PostPurchaseReservedCacheNodesOfferingActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostPurchaseReservedCacheNodesOfferingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostPurchaseReservedCacheNodesOfferingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostPurchaseReservedCacheNodesOfferingRequest struct {
    QueryParams PostPurchaseReservedCacheNodesOfferingQueryParams 
    Headers PostPurchaseReservedCacheNodesOfferingHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostPurchaseReservedCacheNodesOfferingResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

