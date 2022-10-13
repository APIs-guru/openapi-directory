package operations

type GetUpdateConfigurationSetReputationMetricsEnabledActionEnum string

const (
	GetUpdateConfigurationSetReputationMetricsEnabledActionEnumUpdateConfigurationSetReputationMetricsEnabled GetUpdateConfigurationSetReputationMetricsEnabledActionEnum = "UpdateConfigurationSetReputationMetricsEnabled"
)

type GetUpdateConfigurationSetReputationMetricsEnabledVersionEnum string

const (
	GetUpdateConfigurationSetReputationMetricsEnabledVersionEnumTwoThousandAndTen1201 GetUpdateConfigurationSetReputationMetricsEnabledVersionEnum = "2010-12-01"
)

type GetUpdateConfigurationSetReputationMetricsEnabledQueryParams struct {
	Action               GetUpdateConfigurationSetReputationMetricsEnabledActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ConfigurationSetName string                                                       `queryParam:"style=form,explode=true,name=ConfigurationSetName"`
	Enabled              bool                                                         `queryParam:"style=form,explode=true,name=Enabled"`
	Version              GetUpdateConfigurationSetReputationMetricsEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateConfigurationSetReputationMetricsEnabledHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateConfigurationSetReputationMetricsEnabledRequest struct {
	QueryParams GetUpdateConfigurationSetReputationMetricsEnabledQueryParams
	Headers     GetUpdateConfigurationSetReputationMetricsEnabledHeaders
}

type GetUpdateConfigurationSetReputationMetricsEnabledResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
