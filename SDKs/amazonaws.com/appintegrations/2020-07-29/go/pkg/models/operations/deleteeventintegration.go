package operations

type DeleteEventIntegrationPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=Name"`
}

type DeleteEventIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteEventIntegrationRequest struct {
	PathParams DeleteEventIntegrationPathParams
	Headers    DeleteEventIntegrationHeaders
}

type DeleteEventIntegrationResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	DeleteEventIntegrationResponse map[string]interface{}
	InternalServiceError           *interface{}
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
