package operations

import (
	"openapi/pkg/models/shared"
)

type CancelJobRunPathParams struct {
	JobRunID         string `pathParam:"style=simple,explode=false,name=jobRunId"`
	VirtualClusterID string `pathParam:"style=simple,explode=false,name=virtualClusterId"`
}

type CancelJobRunHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CancelJobRunRequest struct {
	PathParams CancelJobRunPathParams
	Headers    CancelJobRunHeaders
}

type CancelJobRunResponse struct {
	CancelJobRunResponse    *shared.CancelJobRunResponse
	ContentType             string
	InternalServerException *interface{}
	StatusCode              int64
	ValidationException     *interface{}
}
