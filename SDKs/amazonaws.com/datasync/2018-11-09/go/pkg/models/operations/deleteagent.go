package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAgentXAmzTargetEnum string

const (
	DeleteAgentXAmzTargetEnumFmrsServiceDeleteAgent DeleteAgentXAmzTargetEnum = "FmrsService.DeleteAgent"
)

type DeleteAgentHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAgentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteAgentRequest struct {
	Headers DeleteAgentHeaders
	Request shared.DeleteAgentRequest `request:"mediaType=application/json"`
}

type DeleteAgentResponse struct {
	ContentType             string
	DeleteAgentResponse     map[string]interface{}
	InternalException       *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
