package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateConnectionWithLagXAmzTargetEnum string

const (
	AssociateConnectionWithLagXAmzTargetEnumOvertureServiceAssociateConnectionWithLag AssociateConnectionWithLagXAmzTargetEnum = "OvertureService.AssociateConnectionWithLag"
)

type AssociateConnectionWithLagHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateConnectionWithLagXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateConnectionWithLagRequest struct {
	Headers AssociateConnectionWithLagHeaders
	Request shared.AssociateConnectionWithLagRequest `request:"mediaType=application/json"`
}

type AssociateConnectionWithLagResponse struct {
	Connection                   *shared.Connection
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
}
