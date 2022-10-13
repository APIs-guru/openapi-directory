package operations

type PostDescribeVolumesActionEnum string

const (
	PostDescribeVolumesActionEnumDescribeVolumes PostDescribeVolumesActionEnum = "DescribeVolumes"
)

type PostDescribeVolumesVersionEnum string

const (
	PostDescribeVolumesVersionEnumTwoThousandAndSixteen1115 PostDescribeVolumesVersionEnum = "2016-11-15"
)

type PostDescribeVolumesQueryParams struct {
	Action     PostDescribeVolumesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                        `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                        `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeVolumesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVolumesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeVolumesRequest struct {
	QueryParams PostDescribeVolumesQueryParams
	Headers     PostDescribeVolumesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVolumesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
