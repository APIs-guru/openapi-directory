package operations

import (
	"openapi/pkg/models/shared"
)

type GetLifecyclePolicyXAmzTargetEnum string

const (
	GetLifecyclePolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921GetLifecyclePolicy GetLifecyclePolicyXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy"
)

type GetLifecyclePolicyHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLifecyclePolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetLifecyclePolicyRequest struct {
	Headers GetLifecyclePolicyHeaders
	Request shared.GetLifecyclePolicyRequest `request:"mediaType=application/json"`
}

type GetLifecyclePolicyResponse struct {
	ContentType                      string
	GetLifecyclePolicyResponse       *shared.GetLifecyclePolicyResponse
	InvalidParameterException        *interface{}
	LifecyclePolicyNotFoundException *interface{}
	RepositoryNotFoundException      *interface{}
	ServerException                  *interface{}
	StatusCode                       int64
}
