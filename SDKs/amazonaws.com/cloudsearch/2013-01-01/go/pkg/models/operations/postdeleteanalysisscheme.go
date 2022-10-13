package operations

type PostDeleteAnalysisSchemeActionEnum string

const (
	PostDeleteAnalysisSchemeActionEnumDeleteAnalysisScheme PostDeleteAnalysisSchemeActionEnum = "DeleteAnalysisScheme"
)

type PostDeleteAnalysisSchemeVersionEnum string

const (
	PostDeleteAnalysisSchemeVersionEnumTwoThousandAndThirteen0101 PostDeleteAnalysisSchemeVersionEnum = "2013-01-01"
)

type PostDeleteAnalysisSchemeQueryParams struct {
	Action  PostDeleteAnalysisSchemeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteAnalysisSchemeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteAnalysisSchemeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteAnalysisSchemeRequest struct {
	QueryParams PostDeleteAnalysisSchemeQueryParams
	Headers     PostDeleteAnalysisSchemeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteAnalysisSchemeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
