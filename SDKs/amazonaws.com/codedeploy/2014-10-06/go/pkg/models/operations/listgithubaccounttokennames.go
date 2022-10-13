package operations

import (
	"openapi/pkg/models/shared"
)

type ListGitHubAccountTokenNamesXAmzTargetEnum string

const (
	ListGitHubAccountTokenNamesXAmzTargetEnumCodeDeploy20141006ListGitHubAccountTokenNames ListGitHubAccountTokenNamesXAmzTargetEnum = "CodeDeploy_20141006.ListGitHubAccountTokenNames"
)

type ListGitHubAccountTokenNamesHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListGitHubAccountTokenNamesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListGitHubAccountTokenNamesRequest struct {
	Headers ListGitHubAccountTokenNamesHeaders
	Request shared.ListGitHubAccountTokenNamesInput `request:"mediaType=application/json"`
}

type ListGitHubAccountTokenNamesResponse struct {
	ContentType                       string
	InvalidNextTokenException         *interface{}
	ListGitHubAccountTokenNamesOutput *shared.ListGitHubAccountTokenNamesOutput
	OperationNotSupportedException    *interface{}
	ResourceValidationException       *interface{}
	StatusCode                        int64
}
