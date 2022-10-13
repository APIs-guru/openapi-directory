package operations

type DeleteIntegrationResponsePathParams struct {
	APIID                 string `pathParam:"style=simple,explode=false,name=apiId"`
	IntegrationID         string `pathParam:"style=simple,explode=false,name=integrationId"`
	IntegrationResponseID string `pathParam:"style=simple,explode=false,name=integrationResponseId"`
}

type DeleteIntegrationResponseHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteIntegrationResponseRequest struct {
	PathParams DeleteIntegrationResponsePathParams
	Headers    DeleteIntegrationResponseHeaders
}

type DeleteIntegrationResponseResponse struct {
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
