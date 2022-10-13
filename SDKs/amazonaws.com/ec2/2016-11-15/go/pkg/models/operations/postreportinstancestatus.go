package operations

type PostReportInstanceStatusActionEnum string

const (
	PostReportInstanceStatusActionEnumReportInstanceStatus PostReportInstanceStatusActionEnum = "ReportInstanceStatus"
)

type PostReportInstanceStatusVersionEnum string

const (
	PostReportInstanceStatusVersionEnumTwoThousandAndSixteen1115 PostReportInstanceStatusVersionEnum = "2016-11-15"
)

type PostReportInstanceStatusQueryParams struct {
	Action  PostReportInstanceStatusActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostReportInstanceStatusVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostReportInstanceStatusHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostReportInstanceStatusRequest struct {
	QueryParams PostReportInstanceStatusQueryParams
	Headers     PostReportInstanceStatusHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostReportInstanceStatusResponse struct {
	ContentType string
	StatusCode  int64
}
