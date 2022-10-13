package operations

type PostDescribeElasticGpusActionEnum string

const (
	PostDescribeElasticGpusActionEnumDescribeElasticGpus PostDescribeElasticGpusActionEnum = "DescribeElasticGpus"
)

type PostDescribeElasticGpusVersionEnum string

const (
	PostDescribeElasticGpusVersionEnumTwoThousandAndSixteen1115 PostDescribeElasticGpusVersionEnum = "2016-11-15"
)

type PostDescribeElasticGpusQueryParams struct {
	Action  PostDescribeElasticGpusActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeElasticGpusVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeElasticGpusHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeElasticGpusRequest struct {
	QueryParams PostDescribeElasticGpusQueryParams
	Headers     PostDescribeElasticGpusHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeElasticGpusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
