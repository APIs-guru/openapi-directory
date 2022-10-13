package operations

import (
	"openapi/pkg/models/shared"
)

type StartJobRunPathParams struct {
	VirtualClusterID string `pathParam:"style=simple,explode=false,name=virtualClusterId"`
}

type StartJobRunHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartJobRunRequestBodyConfigurationOverrides struct {
	ApplicationConfiguration []shared.Configuration          `json:"applicationConfiguration"`
	MonitoringConfiguration  *shared.MonitoringConfiguration `json:"monitoringConfiguration"`
}

type StartJobRunRequestBodyJobDriver struct {
	SparkSubmitJobDriver *shared.SparkSubmitJobDriver `json:"sparkSubmitJobDriver"`
}

type StartJobRunRequestBody struct {
	ClientToken            string                                        `json:"clientToken"`
	ConfigurationOverrides *StartJobRunRequestBodyConfigurationOverrides `json:"configurationOverrides"`
	ExecutionRoleArn       string                                        `json:"executionRoleArn"`
	JobDriver              StartJobRunRequestBodyJobDriver               `json:"jobDriver"`
	Name                   *string                                       `json:"name"`
	ReleaseLabel           string                                        `json:"releaseLabel"`
	Tags                   map[string]string                             `json:"tags"`
}

type StartJobRunRequest struct {
	PathParams StartJobRunPathParams
	Headers    StartJobRunHeaders
	Request    StartJobRunRequestBody `request:"mediaType=application/json"`
}

type StartJobRunResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StartJobRunResponse       *shared.StartJobRunResponse
	StatusCode                int64
	ValidationException       *interface{}
}
