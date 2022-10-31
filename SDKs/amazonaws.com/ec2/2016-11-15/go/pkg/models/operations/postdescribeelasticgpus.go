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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
