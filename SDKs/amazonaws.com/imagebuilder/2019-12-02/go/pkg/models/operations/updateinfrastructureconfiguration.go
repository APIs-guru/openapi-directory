package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateInfrastructureConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateInfrastructureConfigurationRequestBodyLogging struct {
	S3Logs *shared.S3Logs `json:"s3Logs"`
}

type UpdateInfrastructureConfigurationRequestBody struct {
	ClientToken                    string                                               `json:"clientToken"`
	Description                    *string                                              `json:"description"`
	InfrastructureConfigurationArn string                                               `json:"infrastructureConfigurationArn"`
	InstanceProfileName            string                                               `json:"instanceProfileName"`
	InstanceTypes                  []string                                             `json:"instanceTypes"`
	KeyPair                        *string                                              `json:"keyPair"`
	Logging                        *UpdateInfrastructureConfigurationRequestBodyLogging `json:"logging"`
	ResourceTags                   map[string]string                                    `json:"resourceTags"`
	SecurityGroupIds               []string                                             `json:"securityGroupIds"`
	SnsTopicArn                    *string                                              `json:"snsTopicArn"`
	SubnetID                       *string                                              `json:"subnetId"`
	TerminateInstanceOnFailure     *bool                                                `json:"terminateInstanceOnFailure"`
}

type UpdateInfrastructureConfigurationRequest struct {
	Headers UpdateInfrastructureConfigurationHeaders
	Request UpdateInfrastructureConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateInfrastructureConfigurationResponse struct {
	CallRateLimitExceededException            *interface{}
	ClientException                           *interface{}
	ContentType                               string
	ForbiddenException                        *interface{}
	IdempotentParameterMismatchException      *interface{}
	InvalidRequestException                   *interface{}
	ResourceInUseException                    *interface{}
	ServiceException                          *interface{}
	ServiceUnavailableException               *interface{}
	StatusCode                                int64
	UpdateInfrastructureConfigurationResponse *shared.UpdateInfrastructureConfigurationResponse
}
