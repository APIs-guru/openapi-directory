package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeScheduledAuditPathParams struct {
	ScheduledAuditName string `pathParam:"style=simple,explode=false,name=scheduledAuditName"`
}

type DescribeScheduledAuditHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeScheduledAuditRequest struct {
	PathParams DescribeScheduledAuditPathParams
	Headers    DescribeScheduledAuditHeaders
}

type DescribeScheduledAuditResponse struct {
	ContentType                    string
	DescribeScheduledAuditResponse *shared.DescribeScheduledAuditResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
