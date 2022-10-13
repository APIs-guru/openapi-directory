package operations

type PostDescribeEngineDefaultParametersActionEnum string

const (
	PostDescribeEngineDefaultParametersActionEnumDescribeEngineDefaultParameters PostDescribeEngineDefaultParametersActionEnum = "DescribeEngineDefaultParameters"
)

type PostDescribeEngineDefaultParametersVersionEnum string

const (
	PostDescribeEngineDefaultParametersVersionEnumTwoThousandAndFifteen0202 PostDescribeEngineDefaultParametersVersionEnum = "2015-02-02"
)

type PostDescribeEngineDefaultParametersQueryParams struct {
	Action     PostDescribeEngineDefaultParametersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                        `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                        `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeEngineDefaultParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeEngineDefaultParametersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeEngineDefaultParametersRequest struct {
	QueryParams PostDescribeEngineDefaultParametersQueryParams
	Headers     PostDescribeEngineDefaultParametersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeEngineDefaultParametersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
