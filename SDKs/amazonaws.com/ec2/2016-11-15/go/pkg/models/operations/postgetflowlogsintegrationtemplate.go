package operations

type PostGetFlowLogsIntegrationTemplateActionEnum string

const (
	PostGetFlowLogsIntegrationTemplateActionEnumGetFlowLogsIntegrationTemplate PostGetFlowLogsIntegrationTemplateActionEnum = "GetFlowLogsIntegrationTemplate"
)

type PostGetFlowLogsIntegrationTemplateVersionEnum string

const (
	PostGetFlowLogsIntegrationTemplateVersionEnumTwoThousandAndSixteen1115 PostGetFlowLogsIntegrationTemplateVersionEnum = "2016-11-15"
)

type PostGetFlowLogsIntegrationTemplateQueryParams struct {
	Action  PostGetFlowLogsIntegrationTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetFlowLogsIntegrationTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetFlowLogsIntegrationTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetFlowLogsIntegrationTemplateRequest struct {
	QueryParams PostGetFlowLogsIntegrationTemplateQueryParams
	Headers     PostGetFlowLogsIntegrationTemplateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetFlowLogsIntegrationTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
