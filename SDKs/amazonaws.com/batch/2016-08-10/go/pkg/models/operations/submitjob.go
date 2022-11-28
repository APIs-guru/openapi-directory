package operations

import (
	"openapi/pkg/models/shared"
)

type SubmitJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// SubmitJobRequestBodyArrayProperties
// An object representing an Batch array job.
type SubmitJobRequestBodyArrayProperties struct {
	Size *int64 `json:"size,omitempty"`
}

// SubmitJobRequestBodyContainerOverrides
// The overrides that should be sent to a container.
type SubmitJobRequestBodyContainerOverrides struct {
	Command              []string                     `json:"command,omitempty"`
	Environment          []shared.KeyValuePair        `json:"environment,omitempty"`
	InstanceType         *string                      `json:"instanceType,omitempty"`
	Memory               *int64                       `json:"memory,omitempty"`
	ResourceRequirements []shared.ResourceRequirement `json:"resourceRequirements,omitempty"`
	Vcpus                *int64                       `json:"vcpus,omitempty"`
}

// SubmitJobRequestBodyNodeOverrides
// <p>Object representing any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This isn't applicable to jobs that are running on Fargate resources and shouldn't be provided; use <code>containerOverrides</code> instead.</p> </note>
type SubmitJobRequestBodyNodeOverrides struct {
	NodePropertyOverrides []shared.NodePropertyOverride `json:"nodePropertyOverrides,omitempty"`
	NumNodes              *int64                        `json:"numNodes,omitempty"`
}

// SubmitJobRequestBodyRetryStrategy
// The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
type SubmitJobRequestBodyRetryStrategy struct {
	Attempts       *int64                  `json:"attempts,omitempty"`
	EvaluateOnExit []shared.EvaluateOnExit `json:"evaluateOnExit,omitempty"`
}

// SubmitJobRequestBodyTimeout
// An object representing a job timeout configuration.
type SubmitJobRequestBodyTimeout struct {
	AttemptDurationSeconds *int64 `json:"attemptDurationSeconds,omitempty"`
}

type SubmitJobRequestBody struct {
	ArrayProperties    *SubmitJobRequestBodyArrayProperties    `json:"arrayProperties,omitempty"`
	ContainerOverrides *SubmitJobRequestBodyContainerOverrides `json:"containerOverrides,omitempty"`
	DependsOn          []shared.JobDependency                  `json:"dependsOn,omitempty"`
	JobDefinition      string                                  `json:"jobDefinition"`
	JobName            string                                  `json:"jobName"`
	JobQueue           string                                  `json:"jobQueue"`
	NodeOverrides      *SubmitJobRequestBodyNodeOverrides      `json:"nodeOverrides,omitempty"`
	Parameters         map[string]string                       `json:"parameters,omitempty"`
	PropagateTags      *bool                                   `json:"propagateTags,omitempty"`
	RetryStrategy      *SubmitJobRequestBodyRetryStrategy      `json:"retryStrategy,omitempty"`
	Tags               map[string]string                       `json:"tags,omitempty"`
	Timeout            *SubmitJobRequestBodyTimeout            `json:"timeout,omitempty"`
}

type SubmitJobRequest struct {
	Headers SubmitJobHeaders
	Request SubmitJobRequestBody `request:"mediaType=application/json"`
}

type SubmitJobResponse struct {
	ClientException   *interface{}
	ContentType       string
	ServerException   *interface{}
	StatusCode        int64
	SubmitJobResponse *shared.SubmitJobResponse
}
