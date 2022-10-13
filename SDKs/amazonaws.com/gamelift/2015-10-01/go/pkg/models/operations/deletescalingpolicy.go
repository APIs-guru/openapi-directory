package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteScalingPolicyXAmzTargetEnum string

const (
	DeleteScalingPolicyXAmzTargetEnumGameLiftDeleteScalingPolicy DeleteScalingPolicyXAmzTargetEnum = "GameLift.DeleteScalingPolicy"
)

type DeleteScalingPolicyHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteScalingPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteScalingPolicyRequest struct {
	Headers DeleteScalingPolicyHeaders
	Request shared.DeleteScalingPolicyInput `request:"mediaType=application/json"`
}

type DeleteScalingPolicyResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
