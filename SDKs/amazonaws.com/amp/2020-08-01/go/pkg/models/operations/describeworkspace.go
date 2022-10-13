package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkspacePathParams struct {
	WorkspaceID string `pathParam:"style=simple,explode=false,name=workspaceId"`
}

type DescribeWorkspaceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeWorkspaceRequest struct {
	PathParams DescribeWorkspacePathParams
	Headers    DescribeWorkspaceHeaders
}

type DescribeWorkspaceResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeWorkspaceResponse *shared.DescribeWorkspaceResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
