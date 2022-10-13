package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterTaskDefinitionXAmzTargetEnum string

const (
	DeregisterTaskDefinitionXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeregisterTaskDefinition DeregisterTaskDefinitionXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition"
)

type DeregisterTaskDefinitionHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterTaskDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterTaskDefinitionRequest struct {
	Headers DeregisterTaskDefinitionHeaders
	Request shared.DeregisterTaskDefinitionRequest `request:"mediaType=application/json"`
}

type DeregisterTaskDefinitionResponse struct {
	ClientException                  *interface{}
	ContentType                      string
	DeregisterTaskDefinitionResponse *shared.DeregisterTaskDefinitionResponse
	InvalidParameterException        *interface{}
	ServerException                  *interface{}
	StatusCode                       int64
}
