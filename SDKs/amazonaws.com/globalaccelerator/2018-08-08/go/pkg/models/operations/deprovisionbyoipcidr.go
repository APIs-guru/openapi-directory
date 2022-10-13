package operations

import (
	"openapi/pkg/models/shared"
)

type DeprovisionByoipCidrXAmzTargetEnum string

const (
	DeprovisionByoipCidrXAmzTargetEnumGlobalAcceleratorV20180706DeprovisionByoipCidr DeprovisionByoipCidrXAmzTargetEnum = "GlobalAccelerator_V20180706.DeprovisionByoipCidr"
)

type DeprovisionByoipCidrHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeprovisionByoipCidrXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeprovisionByoipCidrRequest struct {
	Headers DeprovisionByoipCidrHeaders
	Request shared.DeprovisionByoipCidrRequest `request:"mediaType=application/json"`
}

type DeprovisionByoipCidrResponse struct {
	AccessDeniedException         *interface{}
	ByoipCidrNotFoundException    *interface{}
	ContentType                   string
	DeprovisionByoipCidrResponse  *shared.DeprovisionByoipCidrResponse
	IncorrectCidrStateException   *interface{}
	InternalServiceErrorException *interface{}
	InvalidArgumentException      *interface{}
	StatusCode                    int64
}
