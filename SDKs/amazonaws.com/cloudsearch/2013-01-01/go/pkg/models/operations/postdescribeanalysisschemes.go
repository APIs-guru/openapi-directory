package operations

type PostDescribeAnalysisSchemesActionEnum string

const (
	PostDescribeAnalysisSchemesActionEnumDescribeAnalysisSchemes PostDescribeAnalysisSchemesActionEnum = "DescribeAnalysisSchemes"
)

type PostDescribeAnalysisSchemesVersionEnum string

const (
	PostDescribeAnalysisSchemesVersionEnumTwoThousandAndThirteen0101 PostDescribeAnalysisSchemesVersionEnum = "2013-01-01"
)

type PostDescribeAnalysisSchemesQueryParams struct {
	Action  PostDescribeAnalysisSchemesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeAnalysisSchemesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAnalysisSchemesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeAnalysisSchemesRequest struct {
	QueryParams PostDescribeAnalysisSchemesQueryParams
	Headers     PostDescribeAnalysisSchemesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeAnalysisSchemesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
