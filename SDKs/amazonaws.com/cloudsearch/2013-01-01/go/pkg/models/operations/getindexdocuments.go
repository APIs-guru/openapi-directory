package operations

type GetIndexDocumentsActionEnum string

const (
	GetIndexDocumentsActionEnumIndexDocuments GetIndexDocumentsActionEnum = "IndexDocuments"
)

type GetIndexDocumentsVersionEnum string

const (
	GetIndexDocumentsVersionEnumTwoThousandAndThirteen0101 GetIndexDocumentsVersionEnum = "2013-01-01"
)

type GetIndexDocumentsQueryParams struct {
	Action     GetIndexDocumentsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                       `queryParam:"style=form,explode=true,name=DomainName"`
	Version    GetIndexDocumentsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetIndexDocumentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetIndexDocumentsRequest struct {
	QueryParams GetIndexDocumentsQueryParams
	Headers     GetIndexDocumentsHeaders
}

type GetIndexDocumentsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
