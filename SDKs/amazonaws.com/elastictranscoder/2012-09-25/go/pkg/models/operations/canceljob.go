package operations

type CancelJobPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type CancelJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CancelJobRequest struct {
	PathParams CancelJobPathParams
	Headers    CancelJobHeaders
}

type CancelJobResponse struct {
	AccessDeniedException        *interface{}
	CancelJobResponse            map[string]interface{}
	ContentType                  string
	IncompatibleVersionException *interface{}
	InternalServiceException     *interface{}
	ResourceInUseException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
