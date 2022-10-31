package operations

type PostStartNetworkInsightsAnalysisActionEnum string

const (
	PostStartNetworkInsightsAnalysisActionEnumStartNetworkInsightsAnalysis PostStartNetworkInsightsAnalysisActionEnum = "StartNetworkInsightsAnalysis"
)

type PostStartNetworkInsightsAnalysisVersionEnum string

const (
	PostStartNetworkInsightsAnalysisVersionEnumTwoThousandAndSixteen1115 PostStartNetworkInsightsAnalysisVersionEnum = "2016-11-15"
)

type PostStartNetworkInsightsAnalysisQueryParams struct {
	Action  PostStartNetworkInsightsAnalysisActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStartNetworkInsightsAnalysisVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStartNetworkInsightsAnalysisHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostStartNetworkInsightsAnalysisRequest struct {
	QueryParams PostStartNetworkInsightsAnalysisQueryParams
	Headers     PostStartNetworkInsightsAnalysisHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStartNetworkInsightsAnalysisResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
