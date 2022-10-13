package operations

type GetDeleteNetworkInsightsAnalysisActionEnum string

const (
	GetDeleteNetworkInsightsAnalysisActionEnumDeleteNetworkInsightsAnalysis GetDeleteNetworkInsightsAnalysisActionEnum = "DeleteNetworkInsightsAnalysis"
)

type GetDeleteNetworkInsightsAnalysisVersionEnum string

const (
	GetDeleteNetworkInsightsAnalysisVersionEnumTwoThousandAndSixteen1115 GetDeleteNetworkInsightsAnalysisVersionEnum = "2016-11-15"
)

type GetDeleteNetworkInsightsAnalysisQueryParams struct {
	Action                    GetDeleteNetworkInsightsAnalysisActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                    *bool                                       `queryParam:"style=form,explode=true,name=DryRun"`
	NetworkInsightsAnalysisID string                                      `queryParam:"style=form,explode=true,name=NetworkInsightsAnalysisId"`
	Version                   GetDeleteNetworkInsightsAnalysisVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteNetworkInsightsAnalysisHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteNetworkInsightsAnalysisRequest struct {
	QueryParams GetDeleteNetworkInsightsAnalysisQueryParams
	Headers     GetDeleteNetworkInsightsAnalysisHeaders
}

type GetDeleteNetworkInsightsAnalysisResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
