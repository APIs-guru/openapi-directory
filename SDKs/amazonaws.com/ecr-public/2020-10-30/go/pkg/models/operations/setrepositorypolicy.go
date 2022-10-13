package operations

import (
	"openapi/pkg/models/shared"
)

type SetRepositoryPolicyXAmzTargetEnum string

const (
	SetRepositoryPolicyXAmzTargetEnumSpencerFrontendServiceSetRepositoryPolicy SetRepositoryPolicyXAmzTargetEnum = "SpencerFrontendService.SetRepositoryPolicy"
)

type SetRepositoryPolicyHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SetRepositoryPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SetRepositoryPolicyRequest struct {
	Headers SetRepositoryPolicyHeaders
	Request shared.SetRepositoryPolicyRequest `request:"mediaType=application/json"`
}

type SetRepositoryPolicyResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	RepositoryNotFoundException *interface{}
	ServerException             *interface{}
	SetRepositoryPolicyResponse *shared.SetRepositoryPolicyResponse
	StatusCode                  int64
}
