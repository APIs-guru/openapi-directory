package operations

type DeleteSubscriptionDefinitionPathParams struct {
	SubscriptionDefinitionID string `pathParam:"style=simple,explode=false,name=SubscriptionDefinitionId"`
}

type DeleteSubscriptionDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteSubscriptionDefinitionRequest struct {
	PathParams DeleteSubscriptionDefinitionPathParams
	Headers    DeleteSubscriptionDefinitionHeaders
}

type DeleteSubscriptionDefinitionResponse struct {
	BadRequestException                  *interface{}
	ContentType                          string
	DeleteSubscriptionDefinitionResponse map[string]interface{}
	StatusCode                           int64
}
