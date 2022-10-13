package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLagXAmzTargetEnum string

const (
	DeleteLagXAmzTargetEnumOvertureServiceDeleteLag DeleteLagXAmzTargetEnum = "OvertureService.DeleteLag"
)

type DeleteLagHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLagXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteLagRequest struct {
	Headers DeleteLagHeaders
	Request shared.DeleteLagRequest `request:"mediaType=application/json"`
}

type DeleteLagResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	Lag                          *shared.Lag
	StatusCode                   int64
}
