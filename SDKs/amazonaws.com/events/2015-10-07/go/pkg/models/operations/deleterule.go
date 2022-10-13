package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRuleXAmzTargetEnum string

const (
	DeleteRuleXAmzTargetEnumAwsEventsDeleteRule DeleteRuleXAmzTargetEnum = "AWSEvents.DeleteRule"
)

type DeleteRuleHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRuleRequest struct {
	Headers DeleteRuleHeaders
	Request shared.DeleteRuleRequest `request:"mediaType=application/json"`
}

type DeleteRuleResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalException               *interface{}
	ManagedRuleException            *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
