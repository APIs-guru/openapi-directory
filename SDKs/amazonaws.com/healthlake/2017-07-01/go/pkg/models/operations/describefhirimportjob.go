package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFhirImportJobXAmzTargetEnum string

const (
	DescribeFhirImportJobXAmzTargetEnumHealthLakeDescribeFhirImportJob DescribeFhirImportJobXAmzTargetEnum = "HealthLake.DescribeFHIRImportJob"
)

type DescribeFhirImportJobHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFhirImportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
