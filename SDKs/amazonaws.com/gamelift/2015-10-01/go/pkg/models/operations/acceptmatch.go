package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptMatchXAmzTargetEnum string

const (
	AcceptMatchXAmzTargetEnumGameLiftAcceptMatch AcceptMatchXAmzTargetEnum = "GameLift.AcceptMatch"
)

type AcceptMatchHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AcceptMatchXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AcceptMatchRequest struct {
	Headers AcceptMatchHeaders
	Request shared.AcceptMatchInput `request:"mediaType=application/json"`
}

type AcceptMatchResponse struct {
	AcceptMatchOutput          map[string]interface{}
	ContentType                string
	InternalServiceException   *interface{}
	InvalidRequestException    *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
	UnsupportedRegionException *interface{}
}
