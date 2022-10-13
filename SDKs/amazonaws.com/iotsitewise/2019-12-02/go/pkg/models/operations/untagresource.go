package operations

type UntagResourceQueryParams struct {
	ResourceArn string   `queryParam:"style=form,explode=true,name=resourceArn"`
	TagKeys     []string `queryParam:"style=form,explode=true,name=tagKeys"`
}

type UntagResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UntagResourceRequest struct {
	QueryParams UntagResourceQueryParams
	Headers     UntagResourceHeaders
}

type UntagResourceResponse struct {
	ConflictingOperationException *interface{}
	ContentType                   string
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	LimitExceededException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UnauthorizedException         *interface{}
	UntagResourceResponse         map[string]interface{}
}
