package operations

import (
	"openapi/pkg/models/shared"
)

type GetScreenDataHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetScreenDataRequestBody struct {
	AppID      string                          `json:"appId"`
	MaxResults *int64                          `json:"maxResults,omitempty"`
	NextToken  *string                         `json:"nextToken,omitempty"`
	ScreenID   string                          `json:"screenId"`
	Variables  map[string]shared.VariableValue `json:"variables,omitempty"`
	WorkbookID string                          `json:"workbookId"`
}

type GetScreenDataRequest struct {
	Headers GetScreenDataHeaders
	Request GetScreenDataRequestBody `request:"mediaType=application/json"`
}

type GetScreenDataResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	GetScreenDataResult         *shared.GetScreenDataResult
	InternalServerException     *interface{}
	RequestTimeoutException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
