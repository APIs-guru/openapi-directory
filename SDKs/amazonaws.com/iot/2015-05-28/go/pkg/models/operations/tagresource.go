package operations

import (
	"openapi/pkg/models/shared"
)

type TagResourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type TagResourceRequestBody struct {
	ResourceArn string       `json:"resourceArn"`
	Tags        []shared.Tag `json:"tags"`
}

type TagResourceRequest struct {
	Headers TagResourceHeaders
	Request TagResourceRequestBody `request:"mediaType=application/json"`
}

type TagResourceResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TagResourceResponse       map[string]interface{}
	ThrottlingException       *interface{}
}
