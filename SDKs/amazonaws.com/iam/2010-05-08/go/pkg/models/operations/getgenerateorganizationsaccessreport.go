package operations

type GetGenerateOrganizationsAccessReportActionEnum string

const (
	GetGenerateOrganizationsAccessReportActionEnumGenerateOrganizationsAccessReport GetGenerateOrganizationsAccessReportActionEnum = "GenerateOrganizationsAccessReport"
)

type GetGenerateOrganizationsAccessReportVersionEnum string

const (
	GetGenerateOrganizationsAccessReportVersionEnumTwoThousandAndTen0508 GetGenerateOrganizationsAccessReportVersionEnum = "2010-05-08"
)

type GetGenerateOrganizationsAccessReportQueryParams struct {
	Action                GetGenerateOrganizationsAccessReportActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	EntityPath            string                                          `queryParam:"style=form,explode=true,name=EntityPath"`
	OrganizationsPolicyID *string                                         `queryParam:"style=form,explode=true,name=OrganizationsPolicyId"`
	Version               GetGenerateOrganizationsAccessReportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGenerateOrganizationsAccessReportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGenerateOrganizationsAccessReportRequest struct {
	QueryParams GetGenerateOrganizationsAccessReportQueryParams
	Headers     GetGenerateOrganizationsAccessReportHeaders
}

type GetGenerateOrganizationsAccessReportResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
