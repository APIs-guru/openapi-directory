package operations




type PostPurchaseScheduledInstancesActionEnum string

const (
    PostPurchaseScheduledInstancesActionEnumPurchaseScheduledInstances PostPurchaseScheduledInstancesActionEnum = "PurchaseScheduledInstances"
)



type PostPurchaseScheduledInstancesVersionEnum string

const (
    PostPurchaseScheduledInstancesVersionEnumTwoThousandAndSixteen1115 PostPurchaseScheduledInstancesVersionEnum = "2016-11-15"
)


type PostPurchaseScheduledInstancesQueryParams struct {
    Action PostPurchaseScheduledInstancesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostPurchaseScheduledInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostPurchaseScheduledInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostPurchaseScheduledInstancesRequest struct {
    QueryParams PostPurchaseScheduledInstancesQueryParams 
    Headers PostPurchaseScheduledInstancesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostPurchaseScheduledInstancesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

