package operations

type GetDescribeConfigurationSettingsActionEnum string

const (
	GetDescribeConfigurationSettingsActionEnumDescribeConfigurationSettings GetDescribeConfigurationSettingsActionEnum = "DescribeConfigurationSettings"
)

type GetDescribeConfigurationSettingsVersionEnum string

const (
	GetDescribeConfigurationSettingsVersionEnumTwoThousandAndTen1201 GetDescribeConfigurationSettingsVersionEnum = "2010-12-01"
)

type GetDescribeConfigurationSettingsQueryParams struct {
	Action          GetDescribeConfigurationSettingsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ApplicationName string                                      `queryParam:"style=form,explode=true,name=ApplicationName"`
	EnvironmentName *string                                     `queryParam:"style=form,explode=true,name=EnvironmentName"`
	TemplateName    *string                                     `queryParam:"style=form,explode=true,name=TemplateName"`
	Version         GetDescribeConfigurationSettingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeConfigurationSettingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeConfigurationSettingsRequest struct {
	QueryParams GetDescribeConfigurationSettingsQueryParams
	Headers     GetDescribeConfigurationSettingsHeaders
}

type GetDescribeConfigurationSettingsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
