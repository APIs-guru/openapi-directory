package operations




type PostCreateSpotDatafeedSubscriptionActionEnum string

const (
    PostCreateSpotDatafeedSubscriptionActionEnumCreateSpotDatafeedSubscription PostCreateSpotDatafeedSubscriptionActionEnum = "CreateSpotDatafeedSubscription"
)



type PostCreateSpotDatafeedSubscriptionVersionEnum string

const (
    PostCreateSpotDatafeedSubscriptionVersionEnumTwoThousandAndSixteen1115 PostCreateSpotDatafeedSubscriptionVersionEnum = "2016-11-15"
)


type PostCreateSpotDatafeedSubscriptionQueryParams struct {
    Action PostCreateSpotDatafeedSubscriptionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateSpotDatafeedSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateSpotDatafeedSubscriptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateSpotDatafeedSubscriptionRequest struct {
    QueryParams PostCreateSpotDatafeedSubscriptionQueryParams 
    Headers PostCreateSpotDatafeedSubscriptionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateSpotDatafeedSubscriptionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

