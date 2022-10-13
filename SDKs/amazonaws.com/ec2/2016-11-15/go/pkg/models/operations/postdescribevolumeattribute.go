package operations

type PostDescribeVolumeAttributeActionEnum string

const (
	PostDescribeVolumeAttributeActionEnumDescribeVolumeAttribute PostDescribeVolumeAttributeActionEnum = "DescribeVolumeAttribute"
)

type PostDescribeVolumeAttributeVersionEnum string

const (
	PostDescribeVolumeAttributeVersionEnumTwoThousandAndSixteen1115 PostDescribeVolumeAttributeVersionEnum = "2016-11-15"
)

type PostDescribeVolumeAttributeQueryParams struct {
	Action  PostDescribeVolumeAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeVolumeAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVolumeAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeVolumeAttributeRequest struct {
	QueryParams PostDescribeVolumeAttributeQueryParams
	Headers     PostDescribeVolumeAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVolumeAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
