package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInfrastructureConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateInfrastructureConfigurationRequestBodyLogging struct {
	S3Logs *shared.S3Logs `json:"s3Logs"`
}

type CreateInfrastructureConfigurationRequestBody struct {
	ClientToken                string                                               `json:"clientToken"`
	Description                *string                                              `json:"description"`
	InstanceProfileName        string                                               `json:"instanceProfileName"`
	InstanceTypes              []string                                             `json:"instanceTypes"`
	KeyPair                    *string                                              `json:"keyPair"`
	Logging                    *CreateInfrastructureConfigurationRequestBodyLogging `json:"logging"`
	Name                       string                                               `json:"name"`
	ResourceTags               map[string]string                                    `json:"resourceTags"`
	SecurityGroupIds           []string                                             `json:"securityGroupIds"`
	SnsTopicArn                *string                                              `json:"snsTopicArn"`
	SubnetID                   *string                                              `json:"subnetId"`
	Tags                       map[string]string                                    `json:"tags"`
	TerminateInstanceOnFailure *bool                                                `json:"terminateInstanceOnFailure"`
}

type CreateInfrastructureConfigurationRequest struct {
	Headers CreateInfrastructureConfigurationHeaders
	Request CreateInfrastructureConfigurationRequestBody `request:"mediaType=application/json"`
}

type CreateInfrastructureConfigurationResponse struct {
	CallRateLimitExceededException            *interface{}
	ClientException                           *interface{}
	ContentType                               string
	CreateInfrastructureConfigurationResponse *shared.CreateInfrastructureConfigurationResponse
	ForbiddenException                        *interface{}
	IdempotentParameterMismatchException      *interface{}
	InvalidRequestException                   *interface{}
	ResourceAlreadyExistsException            *interface{}
	ResourceInUseException                    *interface{}
	ServiceException                          *interface{}
	ServiceQuotaExceededException             *interface{}
	ServiceUnavailableException               *interface{}
	StatusCode                                int64
}
