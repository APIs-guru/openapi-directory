package operations

type PostGenerateCredentialReportActionEnum string

const (
	PostGenerateCredentialReportActionEnumGenerateCredentialReport PostGenerateCredentialReportActionEnum = "GenerateCredentialReport"
)

type PostGenerateCredentialReportVersionEnum string

const (
	PostGenerateCredentialReportVersionEnumTwoThousandAndTen0508 PostGenerateCredentialReportVersionEnum = "2010-05-08"
)

type PostGenerateCredentialReportQueryParams struct {
	Action  PostGenerateCredentialReportActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGenerateCredentialReportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGenerateCredentialReportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGenerateCredentialReportRequest struct {
	QueryParams PostGenerateCredentialReportQueryParams
	Headers     PostGenerateCredentialReportHeaders
}

type PostGenerateCredentialReportResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
