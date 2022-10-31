package operations




type PostCancelSpotInstanceRequestsActionEnum string

const (
    PostCancelSpotInstanceRequestsActionEnumCancelSpotInstanceRequests PostCancelSpotInstanceRequestsActionEnum = "CancelSpotInstanceRequests"
)



type PostCancelSpotInstanceRequestsVersionEnum string

const (
    PostCancelSpotInstanceRequestsVersionEnumTwoThousandAndSixteen1115 PostCancelSpotInstanceRequestsVersionEnum = "2016-11-15"
)


type PostCancelSpotInstanceRequestsQueryParams struct {
    Action PostCancelSpotInstanceRequestsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCancelSpotInstanceRequestsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCancelSpotInstanceRequestsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCancelSpotInstanceRequestsRequest struct {
    QueryParams PostCancelSpotInstanceRequestsQueryParams 
    Headers PostCancelSpotInstanceRequestsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCancelSpotInstanceRequestsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

