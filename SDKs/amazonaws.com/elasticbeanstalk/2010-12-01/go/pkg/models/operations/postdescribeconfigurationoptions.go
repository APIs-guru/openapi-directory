package operations

type PostDescribeConfigurationOptionsActionEnum string

const (
	PostDescribeConfigurationOptionsActionEnumDescribeConfigurationOptions PostDescribeConfigurationOptionsActionEnum = "DescribeConfigurationOptions"
)

type PostDescribeConfigurationOptionsVersionEnum string

const (
	PostDescribeConfigurationOptionsVersionEnumTwoThousandAndTen1201 PostDescribeConfigurationOptionsVersionEnum = "2010-12-01"
)

type PostDescribeConfigurationOptionsQueryParams struct {
	Action  PostDescribeConfigurationOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeConfigurationOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeConfigurationOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeConfigurationOptionsRequest struct {
	QueryParams PostDescribeConfigurationOptionsQueryParams
	Headers     PostDescribeConfigurationOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeConfigurationOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
