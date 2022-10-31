package operations

type PostListServerCertificateTagsActionEnum string

const (
	PostListServerCertificateTagsActionEnumListServerCertificateTags PostListServerCertificateTagsActionEnum = "ListServerCertificateTags"
)

type PostListServerCertificateTagsVersionEnum string

const (
	PostListServerCertificateTagsVersionEnumTwoThousandAndTen0508 PostListServerCertificateTagsVersionEnum = "2010-05-08"
)

type PostListServerCertificateTagsQueryParams struct {
	Action  PostListServerCertificateTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListServerCertificateTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListServerCertificateTagsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostListServerCertificateTagsRequest struct {
	QueryParams PostListServerCertificateTagsQueryParams
	Headers     PostListServerCertificateTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListServerCertificateTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
