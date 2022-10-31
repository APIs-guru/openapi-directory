package operations

import (
	"openapi/pkg/models/shared"
)

type ListGitHubAccountTokenNamesXAmzTargetEnum string

const (
	ListGitHubAccountTokenNamesXAmzTargetEnumCodeDeploy20141006ListGitHubAccountTokenNames ListGitHubAccountTokenNamesXAmzTargetEnum = "CodeDeploy_20141006.ListGitHubAccountTokenNames"
)

type ListGitHubAccountTokenNamesHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListGitHubAccountTokenNamesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
