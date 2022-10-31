package operations




type PostCreateNetworkInsightsPathActionEnum string

const (
    PostCreateNetworkInsightsPathActionEnumCreateNetworkInsightsPath PostCreateNetworkInsightsPathActionEnum = "CreateNetworkInsightsPath"
)



type PostCreateNetworkInsightsPathVersionEnum string

const (
    PostCreateNetworkInsightsPathVersionEnumTwoThousandAndSixteen1115 PostCreateNetworkInsightsPathVersionEnum = "2016-11-15"
)


type PostCreateNetworkInsightsPathQueryParams struct {
    Action PostCreateNetworkInsightsPathActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateNetworkInsightsPathVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateNetworkInsightsPathHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateNetworkInsightsPathRequest struct {
    QueryParams PostCreateNetworkInsightsPathQueryParams 
    Headers PostCreateNetworkInsightsPathHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateNetworkInsightsPathResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

