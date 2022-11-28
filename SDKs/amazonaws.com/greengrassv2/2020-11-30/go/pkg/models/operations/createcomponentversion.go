package operations

import (
	"openapi/pkg/models/shared"
)

type CreateComponentVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateComponentVersionRequestBodyLambdaFunction
// Contains information about an Lambda function to import to create a component.
type CreateComponentVersionRequestBodyLambdaFunction struct {
	ComponentDependencies     map[string]shared.ComponentDependencyRequirement `json:"componentDependencies,omitempty"`
	ComponentLambdaParameters *shared.LambdaExecutionParameters                `json:"componentLambdaParameters,omitempty"`
	ComponentName             *string                                          `json:"componentName,omitempty"`
	ComponentPlatforms        []shared.ComponentPlatform                       `json:"componentPlatforms,omitempty"`
	ComponentVersion          *string                                          `json:"componentVersion,omitempty"`
	LambdaArn                 *string                                          `json:"lambdaArn,omitempty"`
}

type CreateComponentVersionRequestBody struct {
	ClientToken    *string                                          `json:"clientToken,omitempty"`
	InlineRecipe   *string                                          `json:"inlineRecipe,omitempty"`
	LambdaFunction *CreateComponentVersionRequestBodyLambdaFunction `json:"lambdaFunction,omitempty"`
	Tags           map[string]string                                `json:"tags,omitempty"`
}

type CreateComponentVersionRequest struct {
	Headers CreateComponentVersionHeaders
	Request CreateComponentVersionRequestBody `request:"mediaType=application/json"`
}

type CreateComponentVersionResponse struct {
	AccessDeniedException             *interface{}
	ConflictException                 *interface{}
	ContentType                       string
	CreateComponentVersionResponse    *shared.CreateComponentVersionResponse
	InternalServerException           *interface{}
	RequestAlreadyInProgressException *interface{}
	ServiceQuotaExceededException     *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	ValidationException               *interface{}
}
