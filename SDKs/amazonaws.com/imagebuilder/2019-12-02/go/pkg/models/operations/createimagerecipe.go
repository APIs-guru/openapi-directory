package operations

import (
	"openapi/pkg/models/shared"
)

type CreateImageRecipeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateImageRecipeRequestBodyAdditionalInstanceConfiguration
// In addition to your infrastruction configuration, these settings provide an extra layer of control over your build instances. For instances where Image Builder installs the SSM agent, you can choose whether to keep it for the AMI that you create. You can also specify commands to run on launch for all of your build instances.
type CreateImageRecipeRequestBodyAdditionalInstanceConfiguration struct {
	SystemsManagerAgent *shared.SystemsManagerAgent `json:"systemsManagerAgent,omitempty"`
	UserDataOverride    *string                     `json:"userDataOverride,omitempty"`
}

type CreateImageRecipeRequestBody struct {
	AdditionalInstanceConfiguration *CreateImageRecipeRequestBodyAdditionalInstanceConfiguration `json:"additionalInstanceConfiguration,omitempty"`
	BlockDeviceMappings             []shared.InstanceBlockDeviceMapping                          `json:"blockDeviceMappings,omitempty"`
	ClientToken                     string                                                       `json:"clientToken"`
	Components                      []shared.ComponentConfiguration                              `json:"components"`
	Description                     *string                                                      `json:"description,omitempty"`
	Name                            string                                                       `json:"name"`
	ParentImage                     string                                                       `json:"parentImage"`
	SemanticVersion                 string                                                       `json:"semanticVersion"`
	Tags                            map[string]string                                            `json:"tags,omitempty"`
	WorkingDirectory                *string                                                      `json:"workingDirectory,omitempty"`
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
