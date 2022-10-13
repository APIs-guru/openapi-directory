package operations

import (
	"openapi/pkg/models/shared"
)

type PutLifecyclePolicyXAmzTargetEnum string

const (
	PutLifecyclePolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921PutLifecyclePolicy PutLifecyclePolicyXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy"
)

type PutLifecyclePolicyHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutLifecyclePolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutLifecyclePolicyRequest struct {
	Headers PutLifecyclePolicyHeaders
	Request shared.PutLifecyclePolicyRequest `request:"mediaType=application/json"`
}

type PutLifecyclePolicyResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	PutLifecyclePolicyResponse  *shared.PutLifecyclePolicyResponse
	RepositoryNotFoundException *interface{}
	ServerException             *interface{}
	StatusCode                  int64
}
