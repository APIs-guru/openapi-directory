package operations

import (
	"openapi/pkg/models/shared"
)

type AdvertiseByoipCidrXAmzTargetEnum string

const (
	AdvertiseByoipCidrXAmzTargetEnumGlobalAcceleratorV20180706AdvertiseByoipCidr AdvertiseByoipCidrXAmzTargetEnum = "GlobalAccelerator_V20180706.AdvertiseByoipCidr"
)

type AdvertiseByoipCidrHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AdvertiseByoipCidrXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AdvertiseByoipCidrRequest struct {
	Headers AdvertiseByoipCidrHeaders
	Request shared.AdvertiseByoipCidrRequest `request:"mediaType=application/json"`
}

type AdvertiseByoipCidrResponse struct {
	AccessDeniedException         *interface{}
	AdvertiseByoipCidrResponse    *shared.AdvertiseByoipCidrResponse
	ByoipCidrNotFoundException    *interface{}
	ContentType                   string
	IncorrectCidrStateException   *interface{}
	InternalServiceErrorException *interface{}
	InvalidArgumentException      *interface{}
	StatusCode                    int64
}
