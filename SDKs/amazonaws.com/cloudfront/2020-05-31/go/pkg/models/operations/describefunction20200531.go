package operations

type DescribeFunction20200531PathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=Name"`
}

type DescribeFunction20200531StageEnum string

const (
	DescribeFunction20200531StageEnumDevelopment DescribeFunction20200531StageEnum = "DEVELOPMENT"
	DescribeFunction20200531StageEnumLive        DescribeFunction20200531StageEnum = "LIVE"
)

type DescribeFunction20200531QueryParams struct {
	Stage *DescribeFunction20200531StageEnum `queryParam:"style=form,explode=true,name=Stage"`
}

type DescribeFunction20200531Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeFunction20200531Request struct {
	PathParams  DescribeFunction20200531PathParams
	QueryParams DescribeFunction20200531QueryParams
	Headers     DescribeFunction20200531Headers
}

type DescribeFunction20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
