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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
