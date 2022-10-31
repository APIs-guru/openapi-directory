package operations

import (
	"openapi/pkg/models/shared"
)

type InvokeScreenAutomationPathParams struct {
	AppID        string `pathParam:"style=simple,explode=false,name=appId"`
	AutomationID string `pathParam:"style=simple,explode=false,name=automationId"`
	ScreenID     string `pathParam:"style=simple,explode=false,name=screenId"`
	WorkbookID   string `pathParam:"style=simple,explode=false,name=workbookId"`
}

type InvokeScreenAutomationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type InvokeScreenAutomationRequestBody struct {
	ClientRequestToken *string                         `json:"clientRequestToken,omitempty"`
	RowID              *string                         `json:"rowId,omitempty"`
	Variables          map[string]shared.VariableValue `json:"variables,omitempty"`
}

type InvokeScreenAutomationRequest struct {
	PathParams InvokeScreenAutomationPathParams
	Headers    InvokeScreenAutomationHeaders
	Request    InvokeScreenAutomationRequestBody `request:"mediaType=application/json"`
}

type InvokeScreenAutomationResponse struct {
	AccessDeniedException               *interface{}
	AutomationExecutionException        *interface{}
	AutomationExecutionTimeoutException *interface{}
	ContentType                         string
	InternalServerException             *interface{}
	InvokeScreenAutomationResult        *shared.InvokeScreenAutomationResult
	RequestTimeoutException             *interface{}
	ResourceNotFoundException           *interface{}
	ServiceUnavailableException         *interface{}
	StatusCode                          int64
	ThrottlingException                 *interface{}
	ValidationException                 *interface{}
}
