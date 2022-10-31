package operations




type PostDeleteSpotDatafeedSubscriptionActionEnum string

const (
    PostDeleteSpotDatafeedSubscriptionActionEnumDeleteSpotDatafeedSubscription PostDeleteSpotDatafeedSubscriptionActionEnum = "DeleteSpotDatafeedSubscription"
)



type PostDeleteSpotDatafeedSubscriptionVersionEnum string

const (
    PostDeleteSpotDatafeedSubscriptionVersionEnumTwoThousandAndSixteen1115 PostDeleteSpotDatafeedSubscriptionVersionEnum = "2016-11-15"
)


type PostDeleteSpotDatafeedSubscriptionQueryParams struct {
    Action PostDeleteSpotDatafeedSubscriptionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteSpotDatafeedSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteSpotDatafeedSubscriptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteSpotDatafeedSubscriptionRequest struct {
    QueryParams PostDeleteSpotDatafeedSubscriptionQueryParams 
    Headers PostDeleteSpotDatafeedSubscriptionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteSpotDatafeedSubscriptionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

