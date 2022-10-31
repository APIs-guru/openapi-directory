package operations




type GetGetSendStatisticsActionEnum string

const (
    GetGetSendStatisticsActionEnumGetSendStatistics GetGetSendStatisticsActionEnum = "GetSendStatistics"
)



type GetGetSendStatisticsVersionEnum string

const (
    GetGetSendStatisticsVersionEnumTwoThousandAndTen1201 GetGetSendStatisticsVersionEnum = "2010-12-01"
)


type GetGetSendStatisticsQueryParams struct {
    Action GetGetSendStatisticsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version GetGetSendStatisticsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetSendStatisticsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetSendStatisticsRequest struct {
    QueryParams GetGetSendStatisticsQueryParams 
    Headers GetGetSendStatisticsHeaders 
    
}

type GetGetSendStatisticsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

