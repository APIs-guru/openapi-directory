package operations

type TagResourceQueryParams struct {
	ResourceArn string `queryParam:"style=form,explode=true,name=resourceArn"`
}

type TagResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TagResourceRequestBody struct {
	Tags map[string]string `json:"tags"`
}

type TagResourceRequest struct {
	QueryParams TagResourceQueryParams
	Headers     TagResourceHeaders
	Request     TagResourceRequestBody `request:"mediaType=application/json"`
}

type TagResourceResponse struct {
	ConflictingOperationException *interface{}
	ContentType                   string
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	LimitExceededException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	TagResourceResponse           map[string]interface{}
	ThrottlingException           *interface{}
	TooManyTagsException          *interface{}
	UnauthorizedException         *interface{}
}
