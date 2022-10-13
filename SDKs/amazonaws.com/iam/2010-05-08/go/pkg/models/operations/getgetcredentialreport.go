package operations

type GetGetCredentialReportActionEnum string

const (
	GetGetCredentialReportActionEnumGetCredentialReport GetGetCredentialReportActionEnum = "GetCredentialReport"
)

type GetGetCredentialReportVersionEnum string

const (
	GetGetCredentialReportVersionEnumTwoThousandAndTen0508 GetGetCredentialReportVersionEnum = "2010-05-08"
)

type GetGetCredentialReportQueryParams struct {
	Action  GetGetCredentialReportActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetGetCredentialReportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetCredentialReportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetCredentialReportRequest struct {
	QueryParams GetGetCredentialReportQueryParams
	Headers     GetGetCredentialReportHeaders
}

type GetGetCredentialReportResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
