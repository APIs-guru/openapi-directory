package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFunctionPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type CreateFunctionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateFunctionRequestBodySyncConfig
// <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
type CreateFunctionRequestBodySyncConfig struct {
	ConflictDetection           *shared.ConflictDetectionTypeEnum   `json:"conflictDetection,omitempty"`
	ConflictHandler             *shared.ConflictHandlerTypeEnum     `json:"conflictHandler,omitempty"`
	LambdaConflictHandlerConfig *shared.LambdaConflictHandlerConfig `json:"lambdaConflictHandlerConfig,omitempty"`
}

type CreateFunctionRequestBody struct {
	DataSourceName          string                               `json:"dataSourceName"`
	Description             *string                              `json:"description,omitempty"`
	FunctionVersion         string                               `json:"functionVersion"`
	Name                    string                               `json:"name"`
	RequestMappingTemplate  *string                              `json:"requestMappingTemplate,omitempty"`
	ResponseMappingTemplate *string                              `json:"responseMappingTemplate,omitempty"`
	SyncConfig              *CreateFunctionRequestBodySyncConfig `json:"syncConfig,omitempty"`
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
