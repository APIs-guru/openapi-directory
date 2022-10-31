package operations

type PostDescribeEngineDefaultClusterParametersActionEnum string

const (
	PostDescribeEngineDefaultClusterParametersActionEnumDescribeEngineDefaultClusterParameters PostDescribeEngineDefaultClusterParametersActionEnum = "DescribeEngineDefaultClusterParameters"
)

type PostDescribeEngineDefaultClusterParametersVersionEnum string

const (
	PostDescribeEngineDefaultClusterParametersVersionEnumTwoThousandAndFourteen1031 PostDescribeEngineDefaultClusterParametersVersionEnum = "2014-10-31"
)

type PostDescribeEngineDefaultClusterParametersQueryParams struct {
	Action  PostDescribeEngineDefaultClusterParametersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeEngineDefaultClusterParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeEngineDefaultClusterParametersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeEngineDefaultClusterParametersRequest struct {
	QueryParams PostDescribeEngineDefaultClusterParametersQueryParams
	Headers     PostDescribeEngineDefaultClusterParametersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeEngineDefaultClusterParametersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
