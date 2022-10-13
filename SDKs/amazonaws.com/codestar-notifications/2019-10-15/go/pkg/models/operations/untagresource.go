package operations

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
	Arn     string   `json:"Arn"`
	TagKeys []string `json:"TagKeys"`
}

type UntagResourceRequest struct {
	Headers UntagResourceHeaders
	Request UntagResourceRequestBody `request:"mediaType=application/json"`
}

type UntagResourceResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	UntagResourceResult             map[string]interface{}
	ValidationException             *interface{}
}
