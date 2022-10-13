package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAuditMitigationActionsTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
}

type DescribeAuditMitigationActionsTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeAuditMitigationActionsTaskRequest struct {
	PathParams DescribeAuditMitigationActionsTaskPathParams
	Headers    DescribeAuditMitigationActionsTaskHeaders
}

type DescribeAuditMitigationActionsTaskResponse struct {
	ContentType                                string
	DescribeAuditMitigationActionsTaskResponse *shared.DescribeAuditMitigationActionsTaskResponse
	InternalFailureException                   *interface{}
	InvalidRequestException                    *interface{}
	ResourceNotFoundException                  *interface{}
	StatusCode                                 int64
	ThrottlingException                        *interface{}
}
