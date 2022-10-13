package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterScalableTargetXAmzTargetEnum string

const (
	RegisterScalableTargetXAmzTargetEnumAnyScaleFrontendServiceRegisterScalableTarget RegisterScalableTargetXAmzTargetEnum = "AnyScaleFrontendService.RegisterScalableTarget"
)

type RegisterScalableTargetHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterScalableTargetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterScalableTargetRequest struct {
	Headers RegisterScalableTargetHeaders
	Request shared.RegisterScalableTargetRequest `request:"mediaType=application/json"`
}

type RegisterScalableTargetResponse struct {
	ConcurrentUpdateException      *interface{}
	ContentType                    string
	InternalServiceException       *interface{}
	LimitExceededException         *interface{}
	RegisterScalableTargetResponse map[string]interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
