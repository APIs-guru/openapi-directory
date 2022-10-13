package operations

type GetDeleteEnvironmentConfigurationActionEnum string

const (
	GetDeleteEnvironmentConfigurationActionEnumDeleteEnvironmentConfiguration GetDeleteEnvironmentConfigurationActionEnum = "DeleteEnvironmentConfiguration"
)

type GetDeleteEnvironmentConfigurationVersionEnum string

const (
	GetDeleteEnvironmentConfigurationVersionEnumTwoThousandAndTen1201 GetDeleteEnvironmentConfigurationVersionEnum = "2010-12-01"
)

type GetDeleteEnvironmentConfigurationQueryParams struct {
	Action          GetDeleteEnvironmentConfigurationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ApplicationName string                                       `queryParam:"style=form,explode=true,name=ApplicationName"`
	EnvironmentName string                                       `queryParam:"style=form,explode=true,name=EnvironmentName"`
	Version         GetDeleteEnvironmentConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteEnvironmentConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteEnvironmentConfigurationRequest struct {
	QueryParams GetDeleteEnvironmentConfigurationQueryParams
	Headers     GetDeleteEnvironmentConfigurationHeaders
}

type GetDeleteEnvironmentConfigurationResponse struct {
	ContentType string
	StatusCode  int64
}
