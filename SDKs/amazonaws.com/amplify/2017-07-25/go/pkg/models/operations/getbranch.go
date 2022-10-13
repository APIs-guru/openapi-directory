package operations

import (
	"openapi/pkg/models/shared"
)

type GetBranchPathParams struct {
	AppID      string `pathParam:"style=simple,explode=false,name=appId"`
	BranchName string `pathParam:"style=simple,explode=false,name=branchName"`
}

type GetBranchHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBranchRequest struct {
	PathParams GetBranchPathParams
	Headers    GetBranchHeaders
}

type GetBranchResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetBranchResult          *shared.GetBranchResult
	InternalFailureException *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
