package operations

type PostDescribeRegionsActionEnum string

const (
	PostDescribeRegionsActionEnumDescribeRegions PostDescribeRegionsActionEnum = "DescribeRegions"
)

type PostDescribeRegionsVersionEnum string

const (
	PostDescribeRegionsVersionEnumTwoThousandAndSixteen1115 PostDescribeRegionsVersionEnum = "2016-11-15"
)

type PostDescribeRegionsQueryParams struct {
	Action  PostDescribeRegionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeRegionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeRegionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeRegionsRequest struct {
	QueryParams PostDescribeRegionsQueryParams
	Headers     PostDescribeRegionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeRegionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
