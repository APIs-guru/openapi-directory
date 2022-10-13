package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveTargetsXAmzTargetEnum string

const (
	RemoveTargetsXAmzTargetEnumAwsEventsRemoveTargets RemoveTargetsXAmzTargetEnum = "AWSEvents.RemoveTargets"
)

type RemoveTargetsHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveTargetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveTargetsRequest struct {
	Headers RemoveTargetsHeaders
	Request shared.RemoveTargetsRequest `request:"mediaType=application/json"`
}

type RemoveTargetsResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalException               *interface{}
	ManagedRuleException            *interface{}
	RemoveTargetsResponse           *shared.RemoveTargetsResponse
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
