package operations

type PostDefineAnalysisSchemeActionEnum string

const (
	PostDefineAnalysisSchemeActionEnumDefineAnalysisScheme PostDefineAnalysisSchemeActionEnum = "DefineAnalysisScheme"
)

type PostDefineAnalysisSchemeVersionEnum string

const (
	PostDefineAnalysisSchemeVersionEnumTwoThousandAndThirteen0101 PostDefineAnalysisSchemeVersionEnum = "2013-01-01"
)

type PostDefineAnalysisSchemeQueryParams struct {
	Action  PostDefineAnalysisSchemeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDefineAnalysisSchemeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDefineAnalysisSchemeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDefineAnalysisSchemeRequest struct {
	QueryParams PostDefineAnalysisSchemeQueryParams
	Headers     PostDefineAnalysisSchemeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDefineAnalysisSchemeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
