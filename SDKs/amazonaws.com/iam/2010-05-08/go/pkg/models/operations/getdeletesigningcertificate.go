package operations

type GetDeleteSigningCertificateActionEnum string

const (
	GetDeleteSigningCertificateActionEnumDeleteSigningCertificate GetDeleteSigningCertificateActionEnum = "DeleteSigningCertificate"
)

type GetDeleteSigningCertificateVersionEnum string

const (
	GetDeleteSigningCertificateVersionEnumTwoThousandAndTen0508 GetDeleteSigningCertificateVersionEnum = "2010-05-08"
)

type GetDeleteSigningCertificateQueryParams struct {
	Action        GetDeleteSigningCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CertificateID string                                 `queryParam:"style=form,explode=true,name=CertificateId"`
	UserName      *string                                `queryParam:"style=form,explode=true,name=UserName"`
	Version       GetDeleteSigningCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteSigningCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteSigningCertificateRequest struct {
	QueryParams GetDeleteSigningCertificateQueryParams
	Headers     GetDeleteSigningCertificateHeaders
}

type GetDeleteSigningCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
