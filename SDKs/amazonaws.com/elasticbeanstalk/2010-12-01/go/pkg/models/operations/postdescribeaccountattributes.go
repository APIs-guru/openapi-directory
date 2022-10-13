package operations

type PostDescribeAccountAttributesActionEnum string

const (
	PostDescribeAccountAttributesActionEnumDescribeAccountAttributes PostDescribeAccountAttributesActionEnum = "DescribeAccountAttributes"
)

type PostDescribeAccountAttributesVersionEnum string

const (
	PostDescribeAccountAttributesVersionEnumTwoThousandAndTen1201 PostDescribeAccountAttributesVersionEnum = "2010-12-01"
)

type PostDescribeAccountAttributesQueryParams struct {
	Action  PostDescribeAccountAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeAccountAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAccountAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeAccountAttributesRequest struct {
	QueryParams PostDescribeAccountAttributesQueryParams
	Headers     PostDescribeAccountAttributesHeaders
}

type PostDescribeAccountAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
