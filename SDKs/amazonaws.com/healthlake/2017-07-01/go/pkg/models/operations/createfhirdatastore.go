package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFhirDatastoreXAmzTargetEnum string

const (
	CreateFhirDatastoreXAmzTargetEnumHealthLakeCreateFhirDatastore CreateFhirDatastoreXAmzTargetEnum = "HealthLake.CreateFHIRDatastore"
)

type CreateFhirDatastoreHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateFhirDatastoreXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateFhirDatastoreRequest struct {
	Headers CreateFhirDatastoreHeaders
	Request shared.CreateFhirDatastoreRequest `request:"mediaType=application/json"`
}

type CreateFhirDatastoreResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	CreateFhirDatastoreResponse *shared.CreateFhirDatastoreResponse
	InternalServerException     *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
