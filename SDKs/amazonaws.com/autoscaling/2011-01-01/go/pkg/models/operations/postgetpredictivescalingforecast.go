package operations




type PostGetPredictiveScalingForecastActionEnum string

const (
    PostGetPredictiveScalingForecastActionEnumGetPredictiveScalingForecast PostGetPredictiveScalingForecastActionEnum = "GetPredictiveScalingForecast"
)



type PostGetPredictiveScalingForecastVersionEnum string

const (
    PostGetPredictiveScalingForecastVersionEnumTwoThousandAndEleven0101 PostGetPredictiveScalingForecastVersionEnum = "2011-01-01"
)


type PostGetPredictiveScalingForecastQueryParams struct {
    Action PostGetPredictiveScalingForecastActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetPredictiveScalingForecastVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetPredictiveScalingForecastHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetPredictiveScalingForecastRequest struct {
    QueryParams PostGetPredictiveScalingForecastQueryParams 
    Headers PostGetPredictiveScalingForecastHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetPredictiveScalingForecastResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

