package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFhirExportJobXAmzTargetEnum string

const (
	DescribeFhirExportJobXAmzTargetEnumHealthLakeDescribeFhirExportJob DescribeFhirExportJobXAmzTargetEnum = "HealthLake.DescribeFHIRExportJob"
)

type DescribeFhirExportJobHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFhirExportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeFhirExportJobRequest struct {
	Headers DescribeFhirExportJobHeaders
	Request shared.DescribeFhirExportJobRequest `request:"mediaType=application/json"`
}

type DescribeFhirExportJobResponse struct {
	ContentType                   string
	DescribeFhirExportJobResponse *shared.DescribeFhirExportJobResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
