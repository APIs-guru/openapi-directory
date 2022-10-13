package operations

type PostIndexDocumentsActionEnum string

const (
	PostIndexDocumentsActionEnumIndexDocuments PostIndexDocumentsActionEnum = "IndexDocuments"
)

type PostIndexDocumentsVersionEnum string

const (
	PostIndexDocumentsVersionEnumTwoThousandAndEleven0201 PostIndexDocumentsVersionEnum = "2011-02-01"
)

type PostIndexDocumentsQueryParams struct {
	Action  PostIndexDocumentsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostIndexDocumentsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostIndexDocumentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostIndexDocumentsRequest struct {
	QueryParams PostIndexDocumentsQueryParams
	Headers     PostIndexDocumentsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostIndexDocumentsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
