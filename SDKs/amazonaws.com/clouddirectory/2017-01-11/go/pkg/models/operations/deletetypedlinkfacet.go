package operations

type DeleteTypedLinkFacetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type DeleteTypedLinkFacetRequestBody struct {
	Name string `json:"Name"`
}

type DeleteTypedLinkFacetRequest struct {
	Headers DeleteTypedLinkFacetHeaders
	Request DeleteTypedLinkFacetRequestBody `request:"mediaType=application/json"`
}

type DeleteTypedLinkFacetResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	DeleteTypedLinkFacetResponse map[string]interface{}
	FacetNotFoundException       *interface{}
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	LimitExceededException       *interface{}
	ResourceNotFoundException    *interface{}
	RetryableConflictException   *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
