package operations

type GetDeleteConfigurationSetActionEnum string

const (
	GetDeleteConfigurationSetActionEnumDeleteConfigurationSet GetDeleteConfigurationSetActionEnum = "DeleteConfigurationSet"
)

type GetDeleteConfigurationSetVersionEnum string

const (
	GetDeleteConfigurationSetVersionEnumTwoThousandAndTen1201 GetDeleteConfigurationSetVersionEnum = "2010-12-01"
)

type GetDeleteConfigurationSetQueryParams struct {
	Action               GetDeleteConfigurationSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ConfigurationSetName string                               `queryParam:"style=form,explode=true,name=ConfigurationSetName"`
	Version              GetDeleteConfigurationSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteConfigurationSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteConfigurationSetRequest struct {
	QueryParams GetDeleteConfigurationSetQueryParams
	Headers     GetDeleteConfigurationSetHeaders
}

type GetDeleteConfigurationSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
