package operations

import (
	"openapi/pkg/models/shared"
)

type WithdrawByoipCidrXAmzTargetEnum string

const (
	WithdrawByoipCidrXAmzTargetEnumGlobalAcceleratorV20180706WithdrawByoipCidr WithdrawByoipCidrXAmzTargetEnum = "GlobalAccelerator_V20180706.WithdrawByoipCidr"
)

type WithdrawByoipCidrHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        WithdrawByoipCidrXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type WithdrawByoipCidrRequest struct {
	Headers WithdrawByoipCidrHeaders
	Request shared.WithdrawByoipCidrRequest `request:"mediaType=application/json"`
}

type WithdrawByoipCidrResponse struct {
	AccessDeniedException         *interface{}
	ByoipCidrNotFoundException    *interface{}
	ContentType                   string
	IncorrectCidrStateException   *interface{}
	InternalServiceErrorException *interface{}
	InvalidArgumentException      *interface{}
	StatusCode                    int64
	WithdrawByoipCidrResponse     *shared.WithdrawByoipCidrResponse
}
