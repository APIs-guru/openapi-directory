package operations

type GetDeleteSuggesterActionEnum string

const (
	GetDeleteSuggesterActionEnumDeleteSuggester GetDeleteSuggesterActionEnum = "DeleteSuggester"
)

type GetDeleteSuggesterVersionEnum string

const (
	GetDeleteSuggesterVersionEnumTwoThousandAndThirteen0101 GetDeleteSuggesterVersionEnum = "2013-01-01"
)

type GetDeleteSuggesterQueryParams struct {
	Action        GetDeleteSuggesterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName    string                        `queryParam:"style=form,explode=true,name=DomainName"`
	SuggesterName string                        `queryParam:"style=form,explode=true,name=SuggesterName"`
	Version       GetDeleteSuggesterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteSuggesterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteSuggesterRequest struct {
	QueryParams GetDeleteSuggesterQueryParams
	Headers     GetDeleteSuggesterHeaders
}

type GetDeleteSuggesterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
