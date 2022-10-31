package operations

import (
	"openapi/pkg/models/shared"
)

type EnableRuleXAmzTargetEnum string

const (
	EnableRuleXAmzTargetEnumAwsEventsEnableRule EnableRuleXAmzTargetEnum = "AWSEvents.EnableRule"
)

type EnableRuleHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
