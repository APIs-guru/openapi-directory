package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveFacetFromObjectHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

// RemoveFacetFromObjectRequestBodyObjectReference
// The reference that identifies an object.
type RemoveFacetFromObjectRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

// RemoveFacetFromObjectRequestBodySchemaFacet
// A facet.
type RemoveFacetFromObjectRequestBodySchemaFacet struct {
	FacetName *string `json:"FacetName,omitempty"`
	SchemaArn *string `json:"SchemaArn,omitempty"`
}

type RemoveFacetFromObjectRequestBody struct {
	ObjectReference RemoveFacetFromObjectRequestBodyObjectReference `json:"ObjectReference"`
	SchemaFacet     RemoveFacetFromObjectRequestBodySchemaFacet     `json:"SchemaFacet"`
}

type RemoveFacetFromObjectRequest struct {
	Headers RemoveFacetFromObjectHeaders
	Request RemoveFacetFromObjectRequestBody `request:"mediaType=application/json"`
}

type RemoveFacetFromObjectResponse struct {
	AccessDeniedException         *shared.AccessDeniedException
	ContentType                   string
	DirectoryNotEnabledException  *shared.DirectoryNotEnabledException
	FacetValidationException      *shared.FacetValidationException
	InternalServiceException      *shared.InternalServiceException
	InvalidArnException           *shared.InvalidArnException
	LimitExceededException        *shared.LimitExceededException
	RemoveFacetFromObjectResponse map[string]interface{}
	ResourceNotFoundException     *shared.ResourceNotFoundException
	RetryableConflictException    *shared.RetryableConflictException
	StatusCode                    int64
	ValidationException           *shared.ValidationException
}
