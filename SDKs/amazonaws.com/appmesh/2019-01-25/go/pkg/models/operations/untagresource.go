package operations

type UntagResourceQueryParams struct {
	ResourceArn string `queryParam:"style=form,explode=true,name=resourceArn"`
}

type UntagResourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
