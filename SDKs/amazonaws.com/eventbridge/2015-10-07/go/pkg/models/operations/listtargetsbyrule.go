package operations

import (
	"openapi/pkg/models/shared"
)

type ListTargetsByRuleXAmzTargetEnum string

const (
	ListTargetsByRuleXAmzTargetEnumAwsEventsListTargetsByRule ListTargetsByRuleXAmzTargetEnum = "AWSEvents.ListTargetsByRule"
)

type ListTargetsByRuleHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTargetsByRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListTargetsByRuleRequest struct {
	Headers ListTargetsByRuleHeaders
	Request shared.ListTargetsByRuleRequest `request:"mediaType=application/json"`
}

type ListTargetsByRuleResponse struct {
	ContentType               string
	InternalException         *interface{}
	ListTargetsByRuleResponse *shared.ListTargetsByRuleResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
