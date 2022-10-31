package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteScalingPolicyXAmzTargetEnum string

const (
	DeleteScalingPolicyXAmzTargetEnumGameLiftDeleteScalingPolicy DeleteScalingPolicyXAmzTargetEnum = "GameLift.DeleteScalingPolicy"
)

type DeleteScalingPolicyHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteScalingPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
