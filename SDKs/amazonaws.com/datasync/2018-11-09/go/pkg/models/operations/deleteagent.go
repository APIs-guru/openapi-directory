package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAgentXAmzTargetEnum string

const (
	DeleteAgentXAmzTargetEnumFmrsServiceDeleteAgent DeleteAgentXAmzTargetEnum = "FmrsService.DeleteAgent"
)

type DeleteAgentHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAgentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
