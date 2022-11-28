package operations

import (
	"openapi/pkg/models/shared"
)

type AddFacetToObjectHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

// AddFacetToObjectRequestBodyObjectReference
// The reference that identifies an object.
type AddFacetToObjectRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

// AddFacetToObjectRequestBodySchemaFacet
// A facet.
type AddFacetToObjectRequestBodySchemaFacet struct {
	FacetName *string `json:"FacetName,omitempty"`
	SchemaArn *string `json:"SchemaArn,omitempty"`
}

type AddFacetToObjectRequestBody struct {
	ObjectAttributeList []shared.AttributeKeyAndValue              `json:"ObjectAttributeList,omitempty"`
	ObjectReference     AddFacetToObjectRequestBodyObjectReference `json:"ObjectReference"`
	SchemaFacet         AddFacetToObjectRequestBodySchemaFacet     `json:"SchemaFacet"`
}

type AddFacetToObjectRequest struct {
	Headers AddFacetToObjectHeaders
	Request AddFacetToObjectRequestBody `request:"mediaType=application/json"`
}

type AddFacetToObjectResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	AddFacetToObjectResponse     map[string]interface{}
	ContentType                  string
	DirectoryNotEnabledException *shared.DirectoryNotEnabledException
	FacetValidationException     *shared.FacetValidationException
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	LimitExceededException       *shared.LimitExceededException
	ResourceNotFoundException    *shared.ResourceNotFoundException
	RetryableConflictException   *shared.RetryableConflictException
	StatusCode                   int64
	ValidationException          *shared.ValidationException
}
