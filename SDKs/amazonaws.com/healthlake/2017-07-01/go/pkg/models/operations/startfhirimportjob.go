package operations

import (
	"openapi/pkg/models/shared"
)

type StartFhirImportJobXAmzTargetEnum string

const (
	StartFhirImportJobXAmzTargetEnumHealthLakeStartFhirImportJob StartFhirImportJobXAmzTargetEnum = "HealthLake.StartFHIRImportJob"
)

type StartFhirImportJobHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartFhirImportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartFhirImportJobRequest struct {
	Headers StartFhirImportJobHeaders
	Request shared.StartFhirImportJobRequest `request:"mediaType=application/json"`
}

type StartFhirImportJobResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	InternalServerException    *interface{}
	ResourceNotFoundException  *interface{}
	StartFhirImportJobResponse *shared.StartFhirImportJobResponse
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
