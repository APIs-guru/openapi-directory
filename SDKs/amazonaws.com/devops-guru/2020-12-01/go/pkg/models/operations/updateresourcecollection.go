package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateResourceCollectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateResourceCollectionRequestBodyActionEnum string

const (
	UpdateResourceCollectionRequestBodyActionEnumAdd    UpdateResourceCollectionRequestBodyActionEnum = "ADD"
	UpdateResourceCollectionRequestBodyActionEnumRemove UpdateResourceCollectionRequestBodyActionEnum = "REMOVE"
)

type UpdateResourceCollectionRequestBodyResourceCollection struct {
	CloudFormation *shared.UpdateCloudFormationCollectionFilter `json:"CloudFormation,omitempty"`
}

type UpdateResourceCollectionRequestBody struct {
	Action             UpdateResourceCollectionRequestBodyActionEnum         `json:"Action"`
	ResourceCollection UpdateResourceCollectionRequestBodyResourceCollection `json:"ResourceCollection"`
}

type UpdateResourceCollectionRequest struct {
	Headers UpdateResourceCollectionHeaders
	Request UpdateResourceCollectionRequestBody `request:"mediaType=application/json"`
}

type UpdateResourceCollectionResponse struct {
	AccessDeniedException            *interface{}
	ConflictException                *interface{}
	ContentType                      string
	InternalServerException          *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	UpdateResourceCollectionResponse map[string]interface{}
	ValidationException              *interface{}
}
