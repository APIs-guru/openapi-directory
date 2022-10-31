package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContainerRecipeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateContainerRecipeRequestBodyContainerTypeEnum string

const (
	CreateContainerRecipeRequestBodyContainerTypeEnumDocker CreateContainerRecipeRequestBodyContainerTypeEnum = "DOCKER"
)

type CreateContainerRecipeRequestBodyInstanceConfiguration struct {
	BlockDeviceMappings []shared.InstanceBlockDeviceMapping `json:"blockDeviceMappings,omitempty"`
	Image               *string                             `json:"image,omitempty"`
}

type CreateContainerRecipeRequestBodyPlatformOverrideEnum string

const (
	CreateContainerRecipeRequestBodyPlatformOverrideEnumWindows CreateContainerRecipeRequestBodyPlatformOverrideEnum = "Windows"
	CreateContainerRecipeRequestBodyPlatformOverrideEnumLinux   CreateContainerRecipeRequestBodyPlatformOverrideEnum = "Linux"
)

type CreateContainerRecipeRequestBodyTargetRepository struct {
	RepositoryName *string                                `json:"repositoryName,omitempty"`
	Service        *shared.ContainerRepositoryServiceEnum `json:"service,omitempty"`
}

type CreateContainerRecipeRequestBody struct {
	ClientToken            string                                                 `json:"clientToken"`
	Components             []shared.ComponentConfiguration                        `json:"components"`
	ContainerType          CreateContainerRecipeRequestBodyContainerTypeEnum      `json:"containerType"`
	Description            *string                                                `json:"description,omitempty"`
	DockerfileTemplateData *string                                                `json:"dockerfileTemplateData,omitempty"`
	DockerfileTemplateURI  *string                                                `json:"dockerfileTemplateUri,omitempty"`
	ImageOsVersionOverride *string                                                `json:"imageOsVersionOverride,omitempty"`
	InstanceConfiguration  *CreateContainerRecipeRequestBodyInstanceConfiguration `json:"instanceConfiguration,omitempty"`
	KmsKeyID               *string                                                `json:"kmsKeyId,omitempty"`
	Name                   string                                                 `json:"name"`
	ParentImage            string                                                 `json:"parentImage"`
	PlatformOverride       *CreateContainerRecipeRequestBodyPlatformOverrideEnum  `json:"platformOverride,omitempty"`
	SemanticVersion        string                                                 `json:"semanticVersion"`
	Tags                   map[string]string                                      `json:"tags,omitempty"`
	TargetRepository       CreateContainerRecipeRequestBodyTargetRepository       `json:"targetRepository"`
	WorkingDirectory       *string                                                `json:"workingDirectory,omitempty"`
}

type CreateContainerRecipeRequest struct {
	Headers CreateContainerRecipeHeaders
	Request CreateContainerRecipeRequestBody `request:"mediaType=application/json"`
}

type CreateContainerRecipeResponse struct {
	CallRateLimitExceededException       *interface{}
	ClientException                      *interface{}
	ContentType                          string
	CreateContainerRecipeResponse        *shared.CreateContainerRecipeResponse
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
