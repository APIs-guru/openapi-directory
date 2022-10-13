package operations

type GetDescribeListenerCertificatesActionEnum string

const (
	GetDescribeListenerCertificatesActionEnumDescribeListenerCertificates GetDescribeListenerCertificatesActionEnum = "DescribeListenerCertificates"
)

type GetDescribeListenerCertificatesVersionEnum string

const (
	GetDescribeListenerCertificatesVersionEnumTwoThousandAndFifteen1201 GetDescribeListenerCertificatesVersionEnum = "2015-12-01"
)

type GetDescribeListenerCertificatesQueryParams struct {
	Action      GetDescribeListenerCertificatesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ListenerArn string                                     `queryParam:"style=form,explode=true,name=ListenerArn"`
	Marker      *string                                    `queryParam:"style=form,explode=true,name=Marker"`
	PageSize    *int64                                     `queryParam:"style=form,explode=true,name=PageSize"`
	Version     GetDescribeListenerCertificatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeListenerCertificatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeListenerCertificatesRequest struct {
	QueryParams GetDescribeListenerCertificatesQueryParams
	Headers     GetDescribeListenerCertificatesHeaders
}

type GetDescribeListenerCertificatesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
