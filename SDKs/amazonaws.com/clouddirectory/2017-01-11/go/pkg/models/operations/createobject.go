package operations

import (
	"openapi/pkg/models/shared"
)

type CreateObjectHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

// CreateObjectRequestBodyParentReference
// The reference that identifies an object.
type CreateObjectRequestBodyParentReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type CreateObjectRequestBody struct {
	LinkName            *string                                 `json:"LinkName,omitempty"`
	ObjectAttributeList []shared.AttributeKeyAndValue           `json:"ObjectAttributeList,omitempty"`
	ParentReference     *CreateObjectRequestBodyParentReference `json:"ParentReference,omitempty"`
	SchemaFacets        []shared.SchemaFacet                    `json:"SchemaFacets"`
}

type CreateObjectRequest struct {
	Headers CreateObjectHeaders
	Request CreateObjectRequestBody `request:"mediaType=application/json"`
}

type CreateObjectResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	CreateObjectResponse          *shared.CreateObjectResponse
	DirectoryNotEnabledException  *interface{}
	FacetValidationException      *interface{}
	InternalServiceException      *interface{}
	InvalidArnException           *interface{}
	LimitExceededException        *interface{}
	LinkNameAlreadyInUseException *interface{}
	ResourceNotFoundException     *interface{}
	RetryableConflictException    *interface{}
	StatusCode                    int64
	UnsupportedIndexTypeException *interface{}
	ValidationException           *interface{}
}
