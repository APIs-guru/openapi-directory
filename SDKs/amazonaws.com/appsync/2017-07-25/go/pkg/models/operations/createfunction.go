package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFunctionPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type CreateFunctionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateFunctionRequestBodySyncConfig struct {
	ConflictDetection           *shared.ConflictDetectionTypeEnum   `json:"conflictDetection"`
	ConflictHandler             *shared.ConflictHandlerTypeEnum     `json:"conflictHandler"`
	LambdaConflictHandlerConfig *shared.LambdaConflictHandlerConfig `json:"lambdaConflictHandlerConfig"`
}

type CreateFunctionRequestBody struct {
	DataSourceName          string                               `json:"dataSourceName"`
	Description             *string                              `json:"description"`
	FunctionVersion         string                               `json:"functionVersion"`
	Name                    string                               `json:"name"`
	RequestMappingTemplate  *string                              `json:"requestMappingTemplate"`
	ResponseMappingTemplate *string                              `json:"responseMappingTemplate"`
	SyncConfig              *CreateFunctionRequestBodySyncConfig `json:"syncConfig"`
}

type CreateFunctionRequest struct {
	PathParams CreateFunctionPathParams
	Headers    CreateFunctionHeaders
	Request    CreateFunctionRequestBody `request:"mediaType=application/json"`
}

type CreateFunctionResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	CreateFunctionResponse          *shared.CreateFunctionResponse
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
