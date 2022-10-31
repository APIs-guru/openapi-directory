package operations

import (
	"openapi/pkg/models/shared"
)

type GetTelemetryMetadataXAmzTargetEnum string

const (
	GetTelemetryMetadataXAmzTargetEnumInspectorServiceGetTelemetryMetadata GetTelemetryMetadataXAmzTargetEnum = "InspectorService.GetTelemetryMetadata"
)

type GetTelemetryMetadataHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTelemetryMetadataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetTelemetryMetadataRequest struct {
	Headers GetTelemetryMetadataHeaders
	Request shared.GetTelemetryMetadataRequest `request:"mediaType=application/json"`
}

type GetTelemetryMetadataResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	GetTelemetryMetadataResponse *shared.GetTelemetryMetadataResponse
	InternalException            *interface{}
	InvalidInputException        *interface{}
	NoSuchEntityException        *interface{}
	StatusCode                   int64
}
