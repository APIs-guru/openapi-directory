package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContainerRecipeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateContainerRecipeRequestBodyContainerTypeEnum string

const (
	CreateContainerRecipeRequestBodyContainerTypeEnumDocker CreateContainerRecipeRequestBodyContainerTypeEnum = "DOCKER"
)

type CreateContainerRecipeRequestBodyInstanceConfiguration struct {
	BlockDeviceMappings []shared.InstanceBlockDeviceMapping `json:"blockDeviceMappings"`
	Image               *string                             `json:"image"`
}

type CreateContainerRecipeRequestBodyPlatformOverrideEnum string

const (
	CreateContainerRecipeRequestBodyPlatformOverrideEnumWindows CreateContainerRecipeRequestBodyPlatformOverrideEnum = "Windows"
	CreateContainerRecipeRequestBodyPlatformOverrideEnumLinux   CreateContainerRecipeRequestBodyPlatformOverrideEnum = "Linux"
)

type CreateContainerRecipeRequestBodyTargetRepository struct {
	RepositoryName *string                                `json:"repositoryName"`
	Service        *shared.ContainerRepositoryServiceEnum `json:"service"`
}

type CreateContainerRecipeRequestBody struct {
	ClientToken            string                                                 `json:"clientToken"`
	Components             []shared.ComponentConfiguration                        `json:"components"`
	ContainerType          CreateContainerRecipeRequestBodyContainerTypeEnum      `json:"containerType"`
	Description            *string                                                `json:"description"`
	DockerfileTemplateData *string                                                `json:"dockerfileTemplateData"`
	DockerfileTemplateURI  *string                                                `json:"dockerfileTemplateUri"`
	ImageOsVersionOverride *string                                                `json:"imageOsVersionOverride"`
	InstanceConfiguration  *CreateContainerRecipeRequestBodyInstanceConfiguration `json:"instanceConfiguration"`
	KmsKeyID               *string                                                `json:"kmsKeyId"`
	Name                   string                                                 `json:"name"`
	ParentImage            string                                                 `json:"parentImage"`
	PlatformOverride       *CreateContainerRecipeRequestBodyPlatformOverrideEnum  `json:"platformOverride"`
	SemanticVersion        string                                                 `json:"semanticVersion"`
	Tags                   map[string]string                                      `json:"tags"`
	TargetRepository       CreateContainerRecipeRequestBodyTargetRepository       `json:"targetRepository"`
	WorkingDirectory       *string                                                `json:"workingDirectory"`
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
