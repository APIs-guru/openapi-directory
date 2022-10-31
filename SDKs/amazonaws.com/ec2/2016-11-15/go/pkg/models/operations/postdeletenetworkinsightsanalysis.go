package operations




type PostDeleteNetworkInsightsAnalysisActionEnum string

const (
    PostDeleteNetworkInsightsAnalysisActionEnumDeleteNetworkInsightsAnalysis PostDeleteNetworkInsightsAnalysisActionEnum = "DeleteNetworkInsightsAnalysis"
)



type PostDeleteNetworkInsightsAnalysisVersionEnum string

const (
    PostDeleteNetworkInsightsAnalysisVersionEnumTwoThousandAndSixteen1115 PostDeleteNetworkInsightsAnalysisVersionEnum = "2016-11-15"
)


type PostDeleteNetworkInsightsAnalysisQueryParams struct {
    Action PostDeleteNetworkInsightsAnalysisActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteNetworkInsightsAnalysisVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteNetworkInsightsAnalysisHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteNetworkInsightsAnalysisRequest struct {
    QueryParams PostDeleteNetworkInsightsAnalysisQueryParams 
    Headers PostDeleteNetworkInsightsAnalysisHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteNetworkInsightsAnalysisResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

