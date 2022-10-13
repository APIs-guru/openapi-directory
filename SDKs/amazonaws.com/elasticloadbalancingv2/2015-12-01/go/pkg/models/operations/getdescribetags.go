package operations

type GetDescribeTagsActionEnum string

const (
	GetDescribeTagsActionEnumDescribeTags GetDescribeTagsActionEnum = "DescribeTags"
)

type GetDescribeTagsVersionEnum string

const (
	GetDescribeTagsVersionEnumTwoThousandAndFifteen1201 GetDescribeTagsVersionEnum = "2015-12-01"
)

type GetDescribeTagsQueryParams struct {
	Action       GetDescribeTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ResourceArns []string                   `queryParam:"style=form,explode=true,name=ResourceArns"`
	Version      GetDescribeTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeTagsRequest struct {
	QueryParams GetDescribeTagsQueryParams
	Headers     GetDescribeTagsHeaders
}

type GetDescribeTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
