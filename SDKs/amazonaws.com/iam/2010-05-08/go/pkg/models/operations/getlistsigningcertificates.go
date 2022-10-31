package operations

type GetListSigningCertificatesActionEnum string

const (
	GetListSigningCertificatesActionEnumListSigningCertificates GetListSigningCertificatesActionEnum = "ListSigningCertificates"
)

type GetListSigningCertificatesVersionEnum string

const (
	GetListSigningCertificatesVersionEnumTwoThousandAndTen0508 GetListSigningCertificatesVersionEnum = "2010-05-08"
)

type GetListSigningCertificatesQueryParams struct {
	Action   GetListSigningCertificatesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                               `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *int64                                `queryParam:"style=form,explode=true,name=MaxItems"`
	UserName *string                               `queryParam:"style=form,explode=true,name=UserName"`
	Version  GetListSigningCertificatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListSigningCertificatesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListSigningCertificatesRequest struct {
	QueryParams GetListSigningCertificatesQueryParams
	Headers     GetListSigningCertificatesHeaders
}

type GetListSigningCertificatesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
