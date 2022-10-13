package operations

import (
	"openapi/pkg/models/shared"
)

type ProvisionByoipCidrXAmzTargetEnum string

const (
	ProvisionByoipCidrXAmzTargetEnumGlobalAcceleratorV20180706ProvisionByoipCidr ProvisionByoipCidrXAmzTargetEnum = "GlobalAccelerator_V20180706.ProvisionByoipCidr"
)

type ProvisionByoipCidrHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ProvisionByoipCidrXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ProvisionByoipCidrRequest struct {
	Headers ProvisionByoipCidrHeaders
	Request shared.ProvisionByoipCidrRequest `request:"mediaType=application/json"`
}

type ProvisionByoipCidrResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	IncorrectCidrStateException   *interface{}
	InternalServiceErrorException *interface{}
	InvalidArgumentException      *interface{}
	LimitExceededException        *interface{}
	ProvisionByoipCidrResponse    *shared.ProvisionByoipCidrResponse
	StatusCode                    int64
}
