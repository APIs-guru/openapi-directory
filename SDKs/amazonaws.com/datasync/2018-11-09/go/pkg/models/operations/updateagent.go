package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAgentXAmzTargetEnum string

const (
	UpdateAgentXAmzTargetEnumFmrsServiceUpdateAgent UpdateAgentXAmzTargetEnum = "FmrsService.UpdateAgent"
)

type UpdateAgentHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAgentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
