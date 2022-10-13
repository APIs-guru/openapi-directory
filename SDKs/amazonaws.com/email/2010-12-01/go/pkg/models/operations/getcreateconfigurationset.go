package operations

type GetCreateConfigurationSetActionEnum string

const (
	GetCreateConfigurationSetActionEnumCreateConfigurationSet GetCreateConfigurationSetActionEnum = "CreateConfigurationSet"
)

type GetCreateConfigurationSetConfigurationSet struct {
	Name string `queryParam:"name=Name"`
}

type GetCreateConfigurationSetVersionEnum string

const (
	GetCreateConfigurationSetVersionEnumTwoThousandAndTen1201 GetCreateConfigurationSetVersionEnum = "2010-12-01"
)

type GetCreateConfigurationSetQueryParams struct {
	Action           GetCreateConfigurationSetActionEnum       `queryParam:"style=form,explode=true,name=Action"`
	ConfigurationSet GetCreateConfigurationSetConfigurationSet `queryParam:"style=form,explode=true,name=ConfigurationSet"`
	Version          GetCreateConfigurationSetVersionEnum      `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateConfigurationSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateConfigurationSetRequest struct {
	QueryParams GetCreateConfigurationSetQueryParams
	Headers     GetCreateConfigurationSetHeaders
}

type GetCreateConfigurationSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
