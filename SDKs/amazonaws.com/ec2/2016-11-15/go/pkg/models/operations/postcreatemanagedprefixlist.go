package operations

type PostCreateManagedPrefixListActionEnum string

const (
	PostCreateManagedPrefixListActionEnumCreateManagedPrefixList PostCreateManagedPrefixListActionEnum = "CreateManagedPrefixList"
)

type PostCreateManagedPrefixListVersionEnum string

const (
	PostCreateManagedPrefixListVersionEnumTwoThousandAndSixteen1115 PostCreateManagedPrefixListVersionEnum = "2016-11-15"
)

type PostCreateManagedPrefixListQueryParams struct {
	Action  PostCreateManagedPrefixListActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateManagedPrefixListVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateManagedPrefixListHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateManagedPrefixListRequest struct {
	QueryParams PostCreateManagedPrefixListQueryParams
	Headers     PostCreateManagedPrefixListHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateManagedPrefixListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
