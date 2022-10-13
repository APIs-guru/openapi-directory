package operations

import (
	"openapi/pkg/models/shared"
)

type StartFhirExportJobXAmzTargetEnum string

const (
	StartFhirExportJobXAmzTargetEnumHealthLakeStartFhirExportJob StartFhirExportJobXAmzTargetEnum = "HealthLake.StartFHIRExportJob"
)

type StartFhirExportJobHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartFhirExportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartFhirExportJobRequest struct {
	Headers StartFhirExportJobHeaders
	Request shared.StartFhirExportJobRequest `request:"mediaType=application/json"`
}

type StartFhirExportJobResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	InternalServerException    *interface{}
	ResourceNotFoundException  *interface{}
	StartFhirExportJobResponse *shared.StartFhirExportJobResponse
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
