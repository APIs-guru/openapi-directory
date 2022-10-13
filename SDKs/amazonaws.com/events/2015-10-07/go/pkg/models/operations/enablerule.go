package operations

import (
	"openapi/pkg/models/shared"
)

type EnableRuleXAmzTargetEnum string

const (
	EnableRuleXAmzTargetEnumAwsEventsEnableRule EnableRuleXAmzTargetEnum = "AWSEvents.EnableRule"
)

type EnableRuleHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EnableRuleRequest struct {
	Headers EnableRuleHeaders
	Request shared.EnableRuleRequest `request:"mediaType=application/json"`
}

type EnableRuleResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalException               *interface{}
	ManagedRuleException            *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
