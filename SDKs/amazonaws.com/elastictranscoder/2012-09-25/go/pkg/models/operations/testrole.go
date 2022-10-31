package operations

import (
	"openapi/pkg/models/shared"
)

type TestRoleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type TestRoleRequestBody struct {
	InputBucket  string   `json:"InputBucket"`
	OutputBucket string   `json:"OutputBucket"`
	Role         string   `json:"Role"`
	Topics       []string `json:"Topics"`
}

type TestRoleRequest struct {
	Headers TestRoleHeaders
	Request TestRoleRequestBody `request:"mediaType=application/json"`
}

type TestRoleResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	IncompatibleVersionException *interface{}
	InternalServiceException     *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	TestRoleResponse             *shared.TestRoleResponse
	ValidationException          *interface{}
}
