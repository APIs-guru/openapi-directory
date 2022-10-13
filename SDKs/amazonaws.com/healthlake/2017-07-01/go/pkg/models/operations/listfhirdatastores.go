package operations

import (
	"openapi/pkg/models/shared"
)

type ListFhirDatastoresQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFhirDatastoresXAmzTargetEnum string

const (
	ListFhirDatastoresXAmzTargetEnumHealthLakeListFhirDatastores ListFhirDatastoresXAmzTargetEnum = "HealthLake.ListFHIRDatastores"
)

type ListFhirDatastoresHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFhirDatastoresXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListFhirDatastoresRequest struct {
	QueryParams ListFhirDatastoresQueryParams
	Headers     ListFhirDatastoresHeaders
	Request     shared.ListFhirDatastoresRequest `request:"mediaType=application/json"`
}

type ListFhirDatastoresResponse struct {
	ContentType                string
	InternalServerException    *interface{}
	ListFhirDatastoresResponse *shared.ListFhirDatastoresResponse
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
