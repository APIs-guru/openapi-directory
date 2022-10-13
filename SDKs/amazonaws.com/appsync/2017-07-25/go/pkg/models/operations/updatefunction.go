package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFunctionPathParams struct {
	APIID      string `pathParam:"style=simple,explode=false,name=apiId"`
	FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
}

type UpdateFunctionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateFunctionRequestBodySyncConfig struct {
	ConflictDetection           *shared.ConflictDetectionTypeEnum   `json:"conflictDetection"`
	ConflictHandler             *shared.ConflictHandlerTypeEnum     `json:"conflictHandler"`
	LambdaConflictHandlerConfig *shared.LambdaConflictHandlerConfig `json:"lambdaConflictHandlerConfig"`
}

type UpdateFunctionRequestBody struct {
	DataSourceName          string                               `json:"dataSourceName"`
	Description             *string                              `json:"description"`
	FunctionVersion         string                               `json:"functionVersion"`
	Name                    string                               `json:"name"`
	RequestMappingTemplate  *string                              `json:"requestMappingTemplate"`
	ResponseMappingTemplate *string                              `json:"responseMappingTemplate"`
	SyncConfig              *UpdateFunctionRequestBodySyncConfig `json:"syncConfig"`
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
