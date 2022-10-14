package operations

type RemoveFacetFromObjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type RemoveFacetFromObjectRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

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
