package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegistryPolicyXAmzTargetEnum string

const (
	GetRegistryPolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921GetRegistryPolicy GetRegistryPolicyXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy"
)

type GetRegistryPolicyHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRegistryPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRegistryPolicyRequest struct {
	Headers GetRegistryPolicyHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetRegistryPolicyResponse struct {
	ContentType                     string
	GetRegistryPolicyResponse       *shared.GetRegistryPolicyResponse
	InvalidParameterException       *interface{}
	RegistryPolicyNotFoundException *interface{}
	ServerException                 *interface{}
	StatusCode                      int64
}
