package operations

type DeleteFacetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

type DeleteFacetRequestBody struct {
	Name string `json:"Name"`
}

type DeleteFacetRequest struct {
	Headers DeleteFacetHeaders
	Request DeleteFacetRequestBody `request:"mediaType=application/json"`
}

type DeleteFacetResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	DeleteFacetResponse        map[string]interface{}
	FacetInUseException        *interface{}
	FacetNotFoundException     *interface{}
	InternalServiceException   *interface{}
	InvalidArnException        *interface{}
	LimitExceededException     *interface{}
	ResourceNotFoundException  *interface{}
	RetryableConflictException *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
