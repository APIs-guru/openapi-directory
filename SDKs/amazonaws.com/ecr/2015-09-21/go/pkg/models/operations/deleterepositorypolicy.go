package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepositoryPolicyXAmzTargetEnum string

const (
	DeleteRepositoryPolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DeleteRepositoryPolicy DeleteRepositoryPolicyXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy"
)

type DeleteRepositoryPolicyHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRepositoryPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRepositoryPolicyRequest struct {
	Headers DeleteRepositoryPolicyHeaders
	Request shared.DeleteRepositoryPolicyRequest `request:"mediaType=application/json"`
}

type DeleteRepositoryPolicyResponse struct {
	ContentType                       string
	DeleteRepositoryPolicyResponse    *shared.DeleteRepositoryPolicyResponse
	InvalidParameterException         *interface{}
	RepositoryNotFoundException       *interface{}
	RepositoryPolicyNotFoundException *interface{}
	ServerException                   *interface{}
	StatusCode                        int64
}
