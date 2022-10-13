package operations

type GetGetOrganizationsAccessReportActionEnum string

const (
	GetGetOrganizationsAccessReportActionEnumGetOrganizationsAccessReport GetGetOrganizationsAccessReportActionEnum = "GetOrganizationsAccessReport"
)

type GetGetOrganizationsAccessReportSortKeyEnum string

const (
	GetGetOrganizationsAccessReportSortKeyEnumServiceNamespaceAscending       GetGetOrganizationsAccessReportSortKeyEnum = "SERVICE_NAMESPACE_ASCENDING"
	GetGetOrganizationsAccessReportSortKeyEnumServiceNamespaceDescending      GetGetOrganizationsAccessReportSortKeyEnum = "SERVICE_NAMESPACE_DESCENDING"
	GetGetOrganizationsAccessReportSortKeyEnumLastAuthenticatedTimeAscending  GetGetOrganizationsAccessReportSortKeyEnum = "LAST_AUTHENTICATED_TIME_ASCENDING"
	GetGetOrganizationsAccessReportSortKeyEnumLastAuthenticatedTimeDescending GetGetOrganizationsAccessReportSortKeyEnum = "LAST_AUTHENTICATED_TIME_DESCENDING"
)

type GetGetOrganizationsAccessReportVersionEnum string

const (
	GetGetOrganizationsAccessReportVersionEnumTwoThousandAndTen0508 GetGetOrganizationsAccessReportVersionEnum = "2010-05-08"
)

type GetGetOrganizationsAccessReportQueryParams struct {
	Action   GetGetOrganizationsAccessReportActionEnum   `queryParam:"style=form,explode=true,name=Action"`
	JobID    string                                      `queryParam:"style=form,explode=true,name=JobId"`
	Marker   *string                                     `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *int64                                      `queryParam:"style=form,explode=true,name=MaxItems"`
	SortKey  *GetGetOrganizationsAccessReportSortKeyEnum `queryParam:"style=form,explode=true,name=SortKey"`
	Version  GetGetOrganizationsAccessReportVersionEnum  `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetOrganizationsAccessReportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetOrganizationsAccessReportRequest struct {
	QueryParams GetGetOrganizationsAccessReportQueryParams
	Headers     GetGetOrganizationsAccessReportHeaders
}

type GetGetOrganizationsAccessReportResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
