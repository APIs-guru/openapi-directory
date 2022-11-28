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
	AccessDeniedException        *interface{}
	AddFacetToObjectResponse     map[string]interface{}
	ContentType                  string
	DirectoryNotEnabledException *interface{}
	FacetValidationException     *interface{}
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	LimitExceededException       *interface{}
	ResourceNotFoundException    *interface{}
	RetryableConflictException   *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
