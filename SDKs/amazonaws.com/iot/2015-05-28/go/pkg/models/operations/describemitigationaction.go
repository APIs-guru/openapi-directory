package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMitigationActionPathParams struct {
	ActionName string `pathParam:"style=simple,explode=false,name=actionName"`
}

type DescribeMitigationActionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeMitigationActionRequest struct {
	PathParams DescribeMitigationActionPathParams
	Headers    DescribeMitigationActionHeaders
}

type DescribeMitigationActionResponse struct {
	ContentType                      string
	DescribeMitigationActionResponse *shared.DescribeMitigationActionResponse
	InternalFailureException         *interface{}
	InvalidRequestException          *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
}
