package operations

import (
	"openapi/pkg/models/shared"
)

type PutRuleXAmzTargetEnum string

const (
	PutRuleXAmzTargetEnumAwsEventsPutRule PutRuleXAmzTargetEnum = "AWSEvents.PutRule"
)

type PutRuleHeaders struct {
	XAmzAlgorithm     *string               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"name=X-Amz-Credential"`
	XAmzDate          *string               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutRuleRequest struct {
	Headers PutRuleHeaders
	Request shared.PutRuleRequest `request:"mediaType=application/json"`
}

type PutRuleResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalException               *interface{}
	InvalidEventPatternException    *interface{}
	LimitExceededException          *interface{}
	ManagedRuleException            *interface{}
	PutRuleResponse                 *shared.PutRuleResponse
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
