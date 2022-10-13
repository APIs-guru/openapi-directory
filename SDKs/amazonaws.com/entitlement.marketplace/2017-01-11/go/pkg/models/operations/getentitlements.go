package operations

import (
	"openapi/pkg/models/shared"
)

type GetEntitlementsXAmzTargetEnum string

const (
	GetEntitlementsXAmzTargetEnumAwsmpEntitlementServiceGetEntitlements GetEntitlementsXAmzTargetEnum = "AWSMPEntitlementService.GetEntitlements"
)

type GetEntitlementsHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetEntitlementsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetEntitlementsRequest struct {
	Headers GetEntitlementsHeaders
	Request shared.GetEntitlementsRequest `request:"mediaType=application/json"`
}

type GetEntitlementsResponse struct {
	ContentType                   string
	GetEntitlementsResult         *shared.GetEntitlementsResult
	InternalServiceErrorException *shared.InternalServiceErrorException
	InvalidParameterException     *shared.InvalidParameterException
	StatusCode                    int64
	ThrottlingException           *shared.ThrottlingException
}
