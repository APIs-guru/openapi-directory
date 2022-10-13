package operations

type PostDeleteManagedPrefixListActionEnum string

const (
	PostDeleteManagedPrefixListActionEnumDeleteManagedPrefixList PostDeleteManagedPrefixListActionEnum = "DeleteManagedPrefixList"
)

type PostDeleteManagedPrefixListVersionEnum string

const (
	PostDeleteManagedPrefixListVersionEnumTwoThousandAndSixteen1115 PostDeleteManagedPrefixListVersionEnum = "2016-11-15"
)

type PostDeleteManagedPrefixListQueryParams struct {
	Action  PostDeleteManagedPrefixListActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteManagedPrefixListVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteManagedPrefixListHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteManagedPrefixListRequest struct {
	QueryParams PostDeleteManagedPrefixListQueryParams
	Headers     PostDeleteManagedPrefixListHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteManagedPrefixListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
