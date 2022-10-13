package operations

type UntagResourceQueryParams struct {
	ResourceArn string `queryParam:"style=form,explode=true,name=resourceArn"`
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

type UntagResourceRequestBody struct {
	TagKeys []string `json:"tagKeys"`
}

type UntagResourceRequest struct {
	QueryParams UntagResourceQueryParams
	Headers     UntagResourceHeaders
	Request     UntagResourceRequestBody `request:"mediaType=application/json"`
}

type UntagResourceResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UntagResourceOutput          map[string]interface{}
}
