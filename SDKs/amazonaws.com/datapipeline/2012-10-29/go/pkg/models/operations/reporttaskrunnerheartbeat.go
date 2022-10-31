package operations

import (
	"openapi/pkg/models/shared"
)

type ReportTaskRunnerHeartbeatXAmzTargetEnum string

const (
	ReportTaskRunnerHeartbeatXAmzTargetEnumDataPipelineReportTaskRunnerHeartbeat ReportTaskRunnerHeartbeatXAmzTargetEnum = "DataPipeline.ReportTaskRunnerHeartbeat"
)

type ReportTaskRunnerHeartbeatHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ReportTaskRunnerHeartbeatXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ReportTaskRunnerHeartbeatRequest struct {
	Headers ReportTaskRunnerHeartbeatHeaders
	Request shared.ReportTaskRunnerHeartbeatInput `request:"mediaType=application/json"`
}

type ReportTaskRunnerHeartbeatResponse struct {
	ContentType                     string
	InternalServiceError            *interface{}
	InvalidRequestException         *interface{}
	ReportTaskRunnerHeartbeatOutput *shared.ReportTaskRunnerHeartbeatOutput
	StatusCode                      int64
}
