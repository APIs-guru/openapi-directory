package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFunctionPathParams struct {
	APIID      string `pathParam:"style=simple,explode=false,name=apiId"`
	FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
}

type UpdateFunctionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateFunctionRequestBodySyncConfig struct {
	ConflictDetection           *shared.ConflictDetectionTypeEnum   `json:"conflictDetection,omitempty"`
	ConflictHandler             *shared.ConflictHandlerTypeEnum     `json:"conflictHandler,omitempty"`
	LambdaConflictHandlerConfig *shared.LambdaConflictHandlerConfig `json:"lambdaConflictHandlerConfig,omitempty"`
}

type UpdateFunctionRequestBody struct {
	DataSourceName          string                               `json:"dataSourceName"`
	Description             *string                              `json:"description,omitempty"`
	FunctionVersion         string                               `json:"functionVersion"`
	Name                    string                               `json:"name"`
	RequestMappingTemplate  *string                              `json:"requestMappingTemplate,omitempty"`
	ResponseMappingTemplate *string                              `json:"responseMappingTemplate,omitempty"`
	SyncConfig              *UpdateFunctionRequestBodySyncConfig `json:"syncConfig,omitempty"`
}

type UpdateFunctionRequest struct {
	PathParams UpdateFunctionPathParams
	Headers    UpdateFunctionHeaders
	Request    UpdateFunctionRequestBody `request:"mediaType=application/json"`
}

type UpdateFunctionResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
	UpdateFunctionResponse          *shared.UpdateFunctionResponse
}
