package operations

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
	AccessDeniedException         *interface{}
	ContentType                   string
	DirectoryNotEnabledException  *interface{}
	FacetValidationException      *interface{}
	InternalServiceException      *interface{}
	InvalidArnException           *interface{}
	LimitExceededException        *interface{}
	RemoveFacetFromObjectResponse map[string]interface{}
	ResourceNotFoundException     *interface{}
	RetryableConflictException    *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}
