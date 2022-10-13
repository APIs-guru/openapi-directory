package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterTaskDefinitionXAmzTargetEnum string

const (
	RegisterTaskDefinitionXAmzTargetEnumAmazonEc2ContainerServiceV20141113RegisterTaskDefinition RegisterTaskDefinitionXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition"
)

type RegisterTaskDefinitionHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterTaskDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterTaskDefinitionRequest struct {
	Headers RegisterTaskDefinitionHeaders
	Request shared.RegisterTaskDefinitionRequest `request:"mediaType=application/json"`
}

type RegisterTaskDefinitionResponse struct {
	ClientException                *interface{}
	ContentType                    string
	InvalidParameterException      *interface{}
	RegisterTaskDefinitionResponse *shared.RegisterTaskDefinitionResponse
	ServerException                *interface{}
	StatusCode                     int64
}
