package operations

type PostDescribeConfigurationSettingsActionEnum string

const (
	PostDescribeConfigurationSettingsActionEnumDescribeConfigurationSettings PostDescribeConfigurationSettingsActionEnum = "DescribeConfigurationSettings"
)

type PostDescribeConfigurationSettingsVersionEnum string

const (
	PostDescribeConfigurationSettingsVersionEnumTwoThousandAndTen1201 PostDescribeConfigurationSettingsVersionEnum = "2010-12-01"
)

type PostDescribeConfigurationSettingsQueryParams struct {
	Action  PostDescribeConfigurationSettingsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeConfigurationSettingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeConfigurationSettingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeConfigurationSettingsRequest struct {
	QueryParams PostDescribeConfigurationSettingsQueryParams
	Headers     PostDescribeConfigurationSettingsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeConfigurationSettingsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
