package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFhirImportJobXAmzTargetEnum string

const (
	DescribeFhirImportJobXAmzTargetEnumHealthLakeDescribeFhirImportJob DescribeFhirImportJobXAmzTargetEnum = "HealthLake.DescribeFHIRImportJob"
)

type DescribeFhirImportJobHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFhirImportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeFhirImportJobRequest struct {
	Headers DescribeFhirImportJobHeaders
	Request shared.DescribeFhirImportJobRequest `request:"mediaType=application/json"`
}

type DescribeFhirImportJobResponse struct {
	ContentType                   string
	DescribeFhirImportJobResponse *shared.DescribeFhirImportJobResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
