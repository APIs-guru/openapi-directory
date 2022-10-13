package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoryPolicyXAmzTargetEnum string

const (
	GetRepositoryPolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921GetRepositoryPolicy GetRepositoryPolicyXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy"
)

type GetRepositoryPolicyHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRepositoryPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRepositoryPolicyRequest struct {
	Headers GetRepositoryPolicyHeaders
	Request shared.GetRepositoryPolicyRequest `request:"mediaType=application/json"`
}

type GetRepositoryPolicyResponse struct {
	ContentType                       string
	GetRepositoryPolicyResponse       *shared.GetRepositoryPolicyResponse
	InvalidParameterException         *interface{}
	RepositoryNotFoundException       *interface{}
	RepositoryPolicyNotFoundException *interface{}
	ServerException                   *interface{}
	StatusCode                        int64
}
