package operations

type PostGetManagedPrefixListAssociationsActionEnum string

const (
	PostGetManagedPrefixListAssociationsActionEnumGetManagedPrefixListAssociations PostGetManagedPrefixListAssociationsActionEnum = "GetManagedPrefixListAssociations"
)

type PostGetManagedPrefixListAssociationsVersionEnum string

const (
	PostGetManagedPrefixListAssociationsVersionEnumTwoThousandAndSixteen1115 PostGetManagedPrefixListAssociationsVersionEnum = "2016-11-15"
)

type PostGetManagedPrefixListAssociationsQueryParams struct {
	Action     PostGetManagedPrefixListAssociationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                         `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                         `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostGetManagedPrefixListAssociationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetManagedPrefixListAssociationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGetManagedPrefixListAssociationsRequest struct {
	QueryParams PostGetManagedPrefixListAssociationsQueryParams
	Headers     PostGetManagedPrefixListAssociationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetManagedPrefixListAssociationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
