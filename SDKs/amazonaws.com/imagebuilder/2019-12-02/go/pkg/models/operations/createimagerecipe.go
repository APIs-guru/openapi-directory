package operations

import (
	"openapi/pkg/models/shared"
)

type CreateImageRecipeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateImageRecipeRequestBodyAdditionalInstanceConfiguration struct {
	SystemsManagerAgent *shared.SystemsManagerAgent `json:"systemsManagerAgent"`
	UserDataOverride    *string                     `json:"userDataOverride"`
}

type CreateImageRecipeRequestBody struct {
	AdditionalInstanceConfiguration *CreateImageRecipeRequestBodyAdditionalInstanceConfiguration `json:"additionalInstanceConfiguration"`
	BlockDeviceMappings             []shared.InstanceBlockDeviceMapping                          `json:"blockDeviceMappings"`
	ClientToken                     string                                                       `json:"clientToken"`
	Components                      []shared.ComponentConfiguration                              `json:"components"`
	Description                     *string                                                      `json:"description"`
	Name                            string                                                       `json:"name"`
	ParentImage                     string                                                       `json:"parentImage"`
	SemanticVersion                 string                                                       `json:"semanticVersion"`
	Tags                            map[string]string                                            `json:"tags"`
	WorkingDirectory                *string                                                      `json:"workingDirectory"`
}

type CreateImageRecipeRequest struct {
	Headers CreateImageRecipeHeaders
	Request CreateImageRecipeRequestBody `request:"mediaType=application/json"`
}

type CreateImageRecipeResponse struct {
	CallRateLimitExceededException       *interface{}
	ClientException                      *interface{}
	ContentType                          string
	CreateImageRecipeResponse            *shared.CreateImageRecipeResponse
	ForbiddenException                   *interface{}
	IdempotentParameterMismatchException *interface{}
	InvalidRequestException              *interface{}
	InvalidVersionNumberException        *interface{}
	ResourceAlreadyExistsException       *interface{}
	ResourceInUseException               *interface{}
	ServiceException                     *interface{}
	ServiceQuotaExceededException        *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
}
