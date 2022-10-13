package operations

type PostDescribeConfigurationSetActionEnum string

const (
	PostDescribeConfigurationSetActionEnumDescribeConfigurationSet PostDescribeConfigurationSetActionEnum = "DescribeConfigurationSet"
)

type PostDescribeConfigurationSetVersionEnum string

const (
	PostDescribeConfigurationSetVersionEnumTwoThousandAndTen1201 PostDescribeConfigurationSetVersionEnum = "2010-12-01"
)

type PostDescribeConfigurationSetQueryParams struct {
	Action  PostDescribeConfigurationSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeConfigurationSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeConfigurationSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeConfigurationSetRequest struct {
	QueryParams PostDescribeConfigurationSetQueryParams
	Headers     PostDescribeConfigurationSetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeConfigurationSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
