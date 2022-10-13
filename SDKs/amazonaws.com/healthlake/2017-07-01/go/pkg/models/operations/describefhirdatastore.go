package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFhirDatastoreXAmzTargetEnum string

const (
	DescribeFhirDatastoreXAmzTargetEnumHealthLakeDescribeFhirDatastore DescribeFhirDatastoreXAmzTargetEnum = "HealthLake.DescribeFHIRDatastore"
)

type DescribeFhirDatastoreHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFhirDatastoreXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeFhirDatastoreRequest struct {
	Headers DescribeFhirDatastoreHeaders
	Request shared.DescribeFhirDatastoreRequest `request:"mediaType=application/json"`
}

type DescribeFhirDatastoreResponse struct {
	ContentType                   string
	DescribeFhirDatastoreResponse *shared.DescribeFhirDatastoreResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
