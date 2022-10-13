package operations

type DeleteObjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type DeleteObjectRequestBodyObjectReference struct {
	Selector *string `json:"Selector"`
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
