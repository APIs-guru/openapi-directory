package operations

type PostUpdateConfigurationTemplateActionEnum string

const (
	PostUpdateConfigurationTemplateActionEnumUpdateConfigurationTemplate PostUpdateConfigurationTemplateActionEnum = "UpdateConfigurationTemplate"
)

type PostUpdateConfigurationTemplateVersionEnum string

const (
	PostUpdateConfigurationTemplateVersionEnumTwoThousandAndTen1201 PostUpdateConfigurationTemplateVersionEnum = "2010-12-01"
)

type PostUpdateConfigurationTemplateQueryParams struct {
	Action  PostUpdateConfigurationTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateConfigurationTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateConfigurationTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateConfigurationTemplateRequest struct {
	QueryParams PostUpdateConfigurationTemplateQueryParams
	Headers     PostUpdateConfigurationTemplateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateConfigurationTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
