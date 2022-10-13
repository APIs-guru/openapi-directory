package operations

import (
	"openapi/pkg/models/shared"
)

type CreateComponentVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateComponentVersionRequestBodyLambdaFunction struct {
	ComponentDependencies     map[string]shared.ComponentDependencyRequirement `json:"componentDependencies"`
	ComponentLambdaParameters *shared.LambdaExecutionParameters                `json:"componentLambdaParameters"`
	ComponentName             *string                                          `json:"componentName"`
	ComponentPlatforms        []shared.ComponentPlatform                       `json:"componentPlatforms"`
	ComponentVersion          *string                                          `json:"componentVersion"`
	LambdaArn                 *string                                          `json:"lambdaArn"`
}

type CreateComponentVersionRequestBody struct {
	ClientToken    *string                                          `json:"clientToken"`
	InlineRecipe   *string                                          `json:"inlineRecipe"`
	LambdaFunction *CreateComponentVersionRequestBodyLambdaFunction `json:"lambdaFunction"`
	Tags           map[string]string                                `json:"tags"`
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
