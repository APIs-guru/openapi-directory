package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAgentXAmzTargetEnum string

const (
	UpdateAgentXAmzTargetEnumFmrsServiceUpdateAgent UpdateAgentXAmzTargetEnum = "FmrsService.UpdateAgent"
)

type UpdateAgentHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAgentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateAgentRequest struct {
	Headers UpdateAgentHeaders
	Request shared.UpdateAgentRequest `request:"mediaType=application/json"`
}

type UpdateAgentResponse struct {
	ContentType             string
	InternalException       *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
	UpdateAgentResponse     map[string]interface{}
}
