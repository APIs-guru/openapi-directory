package operations

type GetListServerCertificateTagsActionEnum string

const (
	GetListServerCertificateTagsActionEnumListServerCertificateTags GetListServerCertificateTagsActionEnum = "ListServerCertificateTags"
)

type GetListServerCertificateTagsVersionEnum string

const (
	GetListServerCertificateTagsVersionEnumTwoThousandAndTen0508 GetListServerCertificateTagsVersionEnum = "2010-05-08"
)

type GetListServerCertificateTagsQueryParams struct {
	Action                GetListServerCertificateTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker                *string                                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems              *int64                                  `queryParam:"style=form,explode=true,name=MaxItems"`
	ServerCertificateName string                                  `queryParam:"style=form,explode=true,name=ServerCertificateName"`
	Version               GetListServerCertificateTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListServerCertificateTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListServerCertificateTagsRequest struct {
	QueryParams GetListServerCertificateTagsQueryParams
	Headers     GetListServerCertificateTagsHeaders
}

type GetListServerCertificateTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
