package operations

type UpdateSubscriptionDefinitionPathParams struct {
	SubscriptionDefinitionID string `pathParam:"style=simple,explode=false,name=SubscriptionDefinitionId"`
}

type UpdateSubscriptionDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateSubscriptionDefinitionRequestBody struct {
	Name *string `json:"Name"`
}

type UpdateSubscriptionDefinitionRequest struct {
	PathParams UpdateSubscriptionDefinitionPathParams
	Headers    UpdateSubscriptionDefinitionHeaders
	Request    UpdateSubscriptionDefinitionRequestBody `request:"mediaType=application/json"`
}

type UpdateSubscriptionDefinitionResponse struct {
	BadRequestException                  *interface{}
	ContentType                          string
	StatusCode                           int64
	UpdateSubscriptionDefinitionResponse map[string]interface{}
}
