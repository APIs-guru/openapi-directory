package operations

type DeleteObjectHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

// DeleteObjectRequestBodyObjectReference
// The reference that identifies an object.
type DeleteObjectRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type DeleteObjectRequestBody struct {
	ObjectReference DeleteObjectRequestBodyObjectReference `json:"ObjectReference"`
}

type DeleteObjectRequest struct {
	Headers DeleteObjectHeaders
	Request DeleteObjectRequestBody `request:"mediaType=application/json"`
}

type DeleteObjectResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	DeleteObjectResponse         map[string]interface{}
	DirectoryNotEnabledException *interface{}
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	LimitExceededException       *interface{}
	ObjectNotDetachedException   *interface{}
	ResourceNotFoundException    *interface{}
	RetryableConflictException   *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
