package operations

import (
	"openapi/pkg/models/shared"
)

type PutTargetsXAmzTargetEnum string

const (
	PutTargetsXAmzTargetEnumAwsEventsPutTargets PutTargetsXAmzTargetEnum = "AWSEvents.PutTargets"
)

type PutTargetsHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutTargetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutTargetsRequest struct {
	Headers PutTargetsHeaders
	Request shared.PutTargetsRequest `request:"mediaType=application/json"`
}

type PutTargetsResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalException               *interface{}
	LimitExceededException          *interface{}
	ManagedRuleException            *interface{}
	PutTargetsResponse              *shared.PutTargetsResponse
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
