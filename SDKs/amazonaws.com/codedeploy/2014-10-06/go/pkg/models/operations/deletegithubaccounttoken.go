package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGitHubAccountTokenXAmzTargetEnum string

const (
	DeleteGitHubAccountTokenXAmzTargetEnumCodeDeploy20141006DeleteGitHubAccountToken DeleteGitHubAccountTokenXAmzTargetEnum = "CodeDeploy_20141006.DeleteGitHubAccountToken"
)

type DeleteGitHubAccountTokenHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteGitHubAccountTokenXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteGitHubAccountTokenRequest struct {
	Headers DeleteGitHubAccountTokenHeaders
	Request shared.DeleteGitHubAccountTokenInput `request:"mediaType=application/json"`
}

type DeleteGitHubAccountTokenResponse struct {
	ContentType                             string
	DeleteGitHubAccountTokenOutput          *shared.DeleteGitHubAccountTokenOutput
	GitHubAccountTokenDoesNotExistException *interface{}
	GitHubAccountTokenNameRequiredException *interface{}
	InvalidGitHubAccountTokenNameException  *interface{}
	OperationNotSupportedException          *interface{}
	ResourceValidationException             *interface{}
	StatusCode                              int64
}
