package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLagXAmzTargetEnum string

const (
	UpdateLagXAmzTargetEnumOvertureServiceUpdateLag UpdateLagXAmzTargetEnum = "OvertureService.UpdateLag"
)

type UpdateLagHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateLagXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateLagRequest struct {
	Headers UpdateLagHeaders
	Request shared.UpdateLagRequest `request:"mediaType=application/json"`
}

type UpdateLagResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	Lag                          *shared.Lag
	StatusCode                   int64
}
