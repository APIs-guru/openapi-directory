package operations

type PostGetOrganizationsAccessReportActionEnum string

const (
	PostGetOrganizationsAccessReportActionEnumGetOrganizationsAccessReport PostGetOrganizationsAccessReportActionEnum = "GetOrganizationsAccessReport"
)

type PostGetOrganizationsAccessReportVersionEnum string

const (
	PostGetOrganizationsAccessReportVersionEnumTwoThousandAndTen0508 PostGetOrganizationsAccessReportVersionEnum = "2010-05-08"
)

type PostGetOrganizationsAccessReportQueryParams struct {
	Action  PostGetOrganizationsAccessReportActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetOrganizationsAccessReportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetOrganizationsAccessReportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetOrganizationsAccessReportRequest struct {
	QueryParams PostGetOrganizationsAccessReportQueryParams
	Headers     PostGetOrganizationsAccessReportHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetOrganizationsAccessReportResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
