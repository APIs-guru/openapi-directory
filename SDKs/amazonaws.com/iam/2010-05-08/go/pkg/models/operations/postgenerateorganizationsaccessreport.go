package operations

type PostGenerateOrganizationsAccessReportActionEnum string

const (
	PostGenerateOrganizationsAccessReportActionEnumGenerateOrganizationsAccessReport PostGenerateOrganizationsAccessReportActionEnum = "GenerateOrganizationsAccessReport"
)

type PostGenerateOrganizationsAccessReportVersionEnum string

const (
	PostGenerateOrganizationsAccessReportVersionEnumTwoThousandAndTen0508 PostGenerateOrganizationsAccessReportVersionEnum = "2010-05-08"
)

type PostGenerateOrganizationsAccessReportQueryParams struct {
	Action  PostGenerateOrganizationsAccessReportActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGenerateOrganizationsAccessReportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGenerateOrganizationsAccessReportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGenerateOrganizationsAccessReportRequest struct {
	QueryParams PostGenerateOrganizationsAccessReportQueryParams
	Headers     PostGenerateOrganizationsAccessReportHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGenerateOrganizationsAccessReportResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
