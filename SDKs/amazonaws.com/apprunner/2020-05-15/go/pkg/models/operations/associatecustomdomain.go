package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateCustomDomainXAmzTargetEnum string

const (
	AssociateCustomDomainXAmzTargetEnumAppRunnerAssociateCustomDomain AssociateCustomDomainXAmzTargetEnum = "AppRunner.AssociateCustomDomain"
)

type AssociateCustomDomainHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateCustomDomainXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateCustomDomainRequest struct {
	Headers AssociateCustomDomainHeaders
	Request shared.AssociateCustomDomainRequest `request:"mediaType=application/json"`
}

type AssociateCustomDomainResponse struct {
	AssociateCustomDomainResponse *shared.AssociateCustomDomainResponse
	ContentType                   string
	InternalServiceErrorException *interface{}
	InvalidRequestException       *interface{}
	InvalidStateException         *interface{}
	StatusCode                    int64
}
