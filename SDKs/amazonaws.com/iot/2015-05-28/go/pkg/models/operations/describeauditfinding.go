package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAuditFindingPathParams struct {
	FindingID string `pathParam:"style=simple,explode=false,name=findingId"`
}

type DescribeAuditFindingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeAuditFindingRequest struct {
	PathParams DescribeAuditFindingPathParams
	Headers    DescribeAuditFindingHeaders
}

type DescribeAuditFindingResponse struct {
	ContentType                  string
	DescribeAuditFindingResponse *shared.DescribeAuditFindingResponse
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}
