package operations

type PostDescribeVolumeStatusActionEnum string

const (
	PostDescribeVolumeStatusActionEnumDescribeVolumeStatus PostDescribeVolumeStatusActionEnum = "DescribeVolumeStatus"
)

type PostDescribeVolumeStatusVersionEnum string

const (
	PostDescribeVolumeStatusVersionEnumTwoThousandAndSixteen1115 PostDescribeVolumeStatusVersionEnum = "2016-11-15"
)

type PostDescribeVolumeStatusQueryParams struct {
	Action     PostDescribeVolumeStatusActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                             `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                             `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeVolumeStatusVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVolumeStatusHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeVolumeStatusRequest struct {
	QueryParams PostDescribeVolumeStatusQueryParams
	Headers     PostDescribeVolumeStatusHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVolumeStatusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
