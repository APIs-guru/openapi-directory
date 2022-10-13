package operations

type GetDeleteConfigurationTemplateActionEnum string

const (
	GetDeleteConfigurationTemplateActionEnumDeleteConfigurationTemplate GetDeleteConfigurationTemplateActionEnum = "DeleteConfigurationTemplate"
)

type GetDeleteConfigurationTemplateVersionEnum string

const (
	GetDeleteConfigurationTemplateVersionEnumTwoThousandAndTen1201 GetDeleteConfigurationTemplateVersionEnum = "2010-12-01"
)

type GetDeleteConfigurationTemplateQueryParams struct {
	Action          GetDeleteConfigurationTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ApplicationName string                                    `queryParam:"style=form,explode=true,name=ApplicationName"`
	TemplateName    string                                    `queryParam:"style=form,explode=true,name=TemplateName"`
	Version         GetDeleteConfigurationTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteConfigurationTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteConfigurationTemplateRequest struct {
	QueryParams GetDeleteConfigurationTemplateQueryParams
	Headers     GetDeleteConfigurationTemplateHeaders
}

type GetDeleteConfigurationTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
