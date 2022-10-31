package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSoftwareUpdateJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
}

type CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum string

const (
	CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnumCore     CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum = "core"
	CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnumOtaAgent CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum = "ota_agent"
)

type CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum string

const (
	CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnumNone    CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum = "NONE"
	CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnumTrace   CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum = "TRACE"
	CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnumDebug   CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum = "DEBUG"
	CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnumVerbose CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum = "VERBOSE"
	CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnumInfo    CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum = "INFO"
	CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnumWarn    CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum = "WARN"
	CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnumError   CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum = "ERROR"
	CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnumFatal   CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum = "FATAL"
)

type CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum string

const (
	CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnumArmv6l  CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum = "armv6l"
	CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnumArmv7l  CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum = "armv7l"
	CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnumX8664   CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum = "x86_64"
	CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnumAarch64 CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum = "aarch64"
)

type CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum string

const (
	CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnumUbuntu      CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum = "ubuntu"
	CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnumRaspbian    CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum = "raspbian"
	CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnumAmazonLinux CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum = "amazon_linux"
	CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnumOpenwrt     CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum = "openwrt"
)

type CreateSoftwareUpdateJobRequestBody struct {
	S3URLSignerRole              string                                                             `json:"S3UrlSignerRole"`
	SoftwareToUpdate             CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum             `json:"SoftwareToUpdate"`
	UpdateAgentLogLevel          *CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum         `json:"UpdateAgentLogLevel,omitempty"`
	UpdateTargets                []string                                                           `json:"UpdateTargets"`
	UpdateTargetsArchitecture    CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum    `json:"UpdateTargetsArchitecture"`
	UpdateTargetsOperatingSystem CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum `json:"UpdateTargetsOperatingSystem"`
}

type CreateSoftwareUpdateJobRequest struct {
	Headers CreateSoftwareUpdateJobHeaders
	Request CreateSoftwareUpdateJobRequestBody `request:"mediaType=application/json"`
}

type CreateSoftwareUpdateJobResponse struct {
	BadRequestException             *interface{}
	ContentType                     string
	CreateSoftwareUpdateJobResponse *shared.CreateSoftwareUpdateJobResponse
	InternalServerErrorException    *interface{}
	StatusCode                      int64
}
