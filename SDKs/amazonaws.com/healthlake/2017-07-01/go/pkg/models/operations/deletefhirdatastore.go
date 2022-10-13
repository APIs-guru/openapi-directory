package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFhirDatastoreXAmzTargetEnum string

const (
	DeleteFhirDatastoreXAmzTargetEnumHealthLakeDeleteFhirDatastore DeleteFhirDatastoreXAmzTargetEnum = "HealthLake.DeleteFHIRDatastore"
)

type DeleteFhirDatastoreHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteFhirDatastoreXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteFhirDatastoreRequest struct {
	Headers DeleteFhirDatastoreHeaders
	Request shared.DeleteFhirDatastoreRequest `request:"mediaType=application/json"`
}

type DeleteFhirDatastoreResponse struct {
	AccessDeniedException       *interface{}
	ConflictException           *interface{}
	ContentType                 string
	DeleteFhirDatastoreResponse *shared.DeleteFhirDatastoreResponse
	InternalServerException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
