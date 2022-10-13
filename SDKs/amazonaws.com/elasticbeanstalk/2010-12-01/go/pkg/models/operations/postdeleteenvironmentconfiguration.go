package operations

type PostDeleteEnvironmentConfigurationActionEnum string

const (
	PostDeleteEnvironmentConfigurationActionEnumDeleteEnvironmentConfiguration PostDeleteEnvironmentConfigurationActionEnum = "DeleteEnvironmentConfiguration"
)

type PostDeleteEnvironmentConfigurationVersionEnum string

const (
	PostDeleteEnvironmentConfigurationVersionEnumTwoThousandAndTen1201 PostDeleteEnvironmentConfigurationVersionEnum = "2010-12-01"
)

type PostDeleteEnvironmentConfigurationQueryParams struct {
	Action  PostDeleteEnvironmentConfigurationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteEnvironmentConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteEnvironmentConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteEnvironmentConfigurationRequest struct {
	QueryParams PostDeleteEnvironmentConfigurationQueryParams
	Headers     PostDeleteEnvironmentConfigurationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteEnvironmentConfigurationResponse struct {
	ContentType string
	StatusCode  int64
}
