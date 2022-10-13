package operations

type GetListServerCertificatesActionEnum string

const (
	GetListServerCertificatesActionEnumListServerCertificates GetListServerCertificatesActionEnum = "ListServerCertificates"
)

type GetListServerCertificatesVersionEnum string

const (
	GetListServerCertificatesVersionEnumTwoThousandAndTen0508 GetListServerCertificatesVersionEnum = "2010-05-08"
)

type GetListServerCertificatesQueryParams struct {
	Action     GetListServerCertificatesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                              `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems   *int64                               `queryParam:"style=form,explode=true,name=MaxItems"`
	PathPrefix *string                              `queryParam:"style=form,explode=true,name=PathPrefix"`
	Version    GetListServerCertificatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListServerCertificatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListServerCertificatesRequest struct {
	QueryParams GetListServerCertificatesQueryParams
	Headers     GetListServerCertificatesHeaders
}

type GetListServerCertificatesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
