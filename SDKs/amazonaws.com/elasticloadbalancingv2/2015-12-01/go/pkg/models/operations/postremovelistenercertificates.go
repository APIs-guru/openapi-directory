package operations

type PostRemoveListenerCertificatesActionEnum string

const (
	PostRemoveListenerCertificatesActionEnumRemoveListenerCertificates PostRemoveListenerCertificatesActionEnum = "RemoveListenerCertificates"
)

type PostRemoveListenerCertificatesVersionEnum string

const (
	PostRemoveListenerCertificatesVersionEnumTwoThousandAndFifteen1201 PostRemoveListenerCertificatesVersionEnum = "2015-12-01"
)

type PostRemoveListenerCertificatesQueryParams struct {
	Action  PostRemoveListenerCertificatesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRemoveListenerCertificatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRemoveListenerCertificatesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostRemoveListenerCertificatesRequest struct {
	QueryParams PostRemoveListenerCertificatesQueryParams
	Headers     PostRemoveListenerCertificatesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRemoveListenerCertificatesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
