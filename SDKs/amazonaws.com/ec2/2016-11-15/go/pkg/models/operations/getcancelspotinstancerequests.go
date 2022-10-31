package operations




type GetCancelSpotInstanceRequestsActionEnum string

const (
    GetCancelSpotInstanceRequestsActionEnumCancelSpotInstanceRequests GetCancelSpotInstanceRequestsActionEnum = "CancelSpotInstanceRequests"
)



type GetCancelSpotInstanceRequestsVersionEnum string

const (
    GetCancelSpotInstanceRequestsVersionEnumTwoThousandAndSixteen1115 GetCancelSpotInstanceRequestsVersionEnum = "2016-11-15"
)


type GetCancelSpotInstanceRequestsQueryParams struct {
    Action GetCancelSpotInstanceRequestsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    SpotInstanceRequestID []string `queryParam:"style=form,explode=true,name=SpotInstanceRequestId"`
    Version GetCancelSpotInstanceRequestsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCancelSpotInstanceRequestsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCancelSpotInstanceRequestsRequest struct {
    QueryParams GetCancelSpotInstanceRequestsQueryParams 
    Headers GetCancelSpotInstanceRequestsHeaders 
    
}

type GetCancelSpotInstanceRequestsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

