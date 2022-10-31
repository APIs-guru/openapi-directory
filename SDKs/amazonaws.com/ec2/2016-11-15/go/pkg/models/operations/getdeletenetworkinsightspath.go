package operations




type GetDeleteNetworkInsightsPathActionEnum string

const (
    GetDeleteNetworkInsightsPathActionEnumDeleteNetworkInsightsPath GetDeleteNetworkInsightsPathActionEnum = "DeleteNetworkInsightsPath"
)



type GetDeleteNetworkInsightsPathVersionEnum string

const (
    GetDeleteNetworkInsightsPathVersionEnumTwoThousandAndSixteen1115 GetDeleteNetworkInsightsPathVersionEnum = "2016-11-15"
)


type GetDeleteNetworkInsightsPathQueryParams struct {
    Action GetDeleteNetworkInsightsPathActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    NetworkInsightsPathID string `queryParam:"style=form,explode=true,name=NetworkInsightsPathId"`
    Version GetDeleteNetworkInsightsPathVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteNetworkInsightsPathHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteNetworkInsightsPathRequest struct {
    QueryParams GetDeleteNetworkInsightsPathQueryParams 
    Headers GetDeleteNetworkInsightsPathHeaders 
    
}

type GetDeleteNetworkInsightsPathResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

