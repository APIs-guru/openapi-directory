package operations

import (
	"openapi/pkg/models/shared"
)

type TagResourcePathParams struct {
	ResourceID string `pathParam:"style=simple,explode=false,name=ResourceId"`
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
	Tags []shared.Tag `json:"Tags"`
}

type TagResourceRequest struct {
	PathParams TagResourcePathParams
	Headers    TagResourceHeaders
	Request    TagResourceRequestBody `request:"mediaType=application/json"`
}

type TagResourceResponse struct {
	AccessPointNotFound *interface{}
	BadRequest          *interface{}
	ContentType         string
	FileSystemNotFound  *interface{}
	InternalServerError *interface{}
	StatusCode          int64
}
