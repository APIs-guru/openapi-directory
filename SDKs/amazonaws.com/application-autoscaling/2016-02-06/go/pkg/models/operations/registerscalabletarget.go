package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterScalableTargetXAmzTargetEnum string

const (
	RegisterScalableTargetXAmzTargetEnumAnyScaleFrontendServiceRegisterScalableTarget RegisterScalableTargetXAmzTargetEnum = "AnyScaleFrontendService.RegisterScalableTarget"
)

type RegisterScalableTargetHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterScalableTargetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
