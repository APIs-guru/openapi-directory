package operations

import (
	"openapi/pkg/models/shared"
)

type CancelReplayXAmzTargetEnum string

const (
	CancelReplayXAmzTargetEnumAwsEventsCancelReplay CancelReplayXAmzTargetEnum = "AWSEvents.CancelReplay"
)

type CancelReplayHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelReplayXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelReplayRequest struct {
	Headers CancelReplayHeaders
	Request shared.CancelReplayRequest `request:"mediaType=application/json"`
}

type CancelReplayResponse struct {
	CancelReplayResponse            *shared.CancelReplayResponse
	ConcurrentModificationException *interface{}
	ContentType                     string
	IllegalStatusException          *interface{}
	InternalException               *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
