package operations

type GetDeleteAnalysisSchemeActionEnum string

const (
	GetDeleteAnalysisSchemeActionEnumDeleteAnalysisScheme GetDeleteAnalysisSchemeActionEnum = "DeleteAnalysisScheme"
)

type GetDeleteAnalysisSchemeVersionEnum string

const (
	GetDeleteAnalysisSchemeVersionEnumTwoThousandAndThirteen0101 GetDeleteAnalysisSchemeVersionEnum = "2013-01-01"
)

type GetDeleteAnalysisSchemeQueryParams struct {
	Action             GetDeleteAnalysisSchemeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AnalysisSchemeName string                             `queryParam:"style=form,explode=true,name=AnalysisSchemeName"`
	DomainName         string                             `queryParam:"style=form,explode=true,name=DomainName"`
	Version            GetDeleteAnalysisSchemeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteAnalysisSchemeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteAnalysisSchemeRequest struct {
	QueryParams GetDeleteAnalysisSchemeQueryParams
	Headers     GetDeleteAnalysisSchemeHeaders
}

type GetDeleteAnalysisSchemeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
