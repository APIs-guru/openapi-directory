package operations

import (
	"openapi/pkg/models/shared"
)

type TestEventPatternXAmzTargetEnum string

const (
	TestEventPatternXAmzTargetEnumAwsEventsTestEventPattern TestEventPatternXAmzTargetEnum = "AWSEvents.TestEventPattern"
)

type TestEventPatternHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TestEventPatternXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TestEventPatternRequest struct {
	Headers TestEventPatternHeaders
	Request shared.TestEventPatternRequest `request:"mediaType=application/json"`
}

type TestEventPatternResponse struct {
	ContentType                  string
	InternalException            *interface{}
	InvalidEventPatternException *interface{}
	StatusCode                   int64
	TestEventPatternResponse     *shared.TestEventPatternResponse
}
