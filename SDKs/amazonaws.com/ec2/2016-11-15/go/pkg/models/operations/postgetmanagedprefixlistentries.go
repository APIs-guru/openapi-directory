package operations

type PostGetManagedPrefixListEntriesActionEnum string

const (
	PostGetManagedPrefixListEntriesActionEnumGetManagedPrefixListEntries PostGetManagedPrefixListEntriesActionEnum = "GetManagedPrefixListEntries"
)

type PostGetManagedPrefixListEntriesVersionEnum string

const (
	PostGetManagedPrefixListEntriesVersionEnumTwoThousandAndSixteen1115 PostGetManagedPrefixListEntriesVersionEnum = "2016-11-15"
)

type PostGetManagedPrefixListEntriesQueryParams struct {
	Action     PostGetManagedPrefixListEntriesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                    `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                    `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostGetManagedPrefixListEntriesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetManagedPrefixListEntriesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGetManagedPrefixListEntriesRequest struct {
	QueryParams PostGetManagedPrefixListEntriesQueryParams
	Headers     PostGetManagedPrefixListEntriesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetManagedPrefixListEntriesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
