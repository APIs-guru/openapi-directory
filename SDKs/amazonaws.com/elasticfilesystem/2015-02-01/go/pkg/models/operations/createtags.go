package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTagsPathParams struct {
	FileSystemID string `pathParam:"style=simple,explode=false,name=FileSystemId"`
}

type CreateTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateTagsRequestBody struct {
	Tags []shared.Tag `json:"Tags"`
}

type CreateTagsRequest struct {
	PathParams CreateTagsPathParams
	Headers    CreateTagsHeaders
	Request    CreateTagsRequestBody `request:"mediaType=application/json"`
}

type CreateTagsResponse struct {
	BadRequest          *interface{}
	ContentType         string
	FileSystemNotFound  *interface{}
	InternalServerError *interface{}
	StatusCode          int64
}
