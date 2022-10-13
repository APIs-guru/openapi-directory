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
	Action  PostDeleteNetworkInsightsAnalysisActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteNetworkInsightsAnalysisVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteNetworkInsightsAnalysisHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteNetworkInsightsAnalysisRequest struct {
	QueryParams PostDeleteNetworkInsightsAnalysisQueryParams
	Headers     PostDeleteNetworkInsightsAnalysisHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteNetworkInsightsAnalysisResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
