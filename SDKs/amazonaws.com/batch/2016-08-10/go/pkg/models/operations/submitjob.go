package operations

import (
	"openapi/pkg/models/shared"
)

type SubmitJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SubmitJobRequestBodyArrayProperties struct {
	Size *int64 `json:"size"`
}

type SubmitJobRequestBodyContainerOverrides struct {
	Command              []string                     `json:"command"`
	Environment          []shared.KeyValuePair        `json:"environment"`
	InstanceType         *string                      `json:"instanceType"`
	Memory               *int64                       `json:"memory"`
	ResourceRequirements []shared.ResourceRequirement `json:"resourceRequirements"`
	Vcpus                *int64                       `json:"vcpus"`
}

type SubmitJobRequestBodyNodeOverrides struct {
	NodePropertyOverrides []shared.NodePropertyOverride `json:"nodePropertyOverrides"`
	NumNodes              *int64                        `json:"numNodes"`
}

type SubmitJobRequestBodyRetryStrategy struct {
	Attempts       *int64                  `json:"attempts"`
	EvaluateOnExit []shared.EvaluateOnExit `json:"evaluateOnExit"`
}

type SubmitJobRequestBodyTimeout struct {
	AttemptDurationSeconds *int64 `json:"attemptDurationSeconds"`
}

type SubmitJobRequestBody struct {
	ArrayProperties    *SubmitJobRequestBodyArrayProperties    `json:"arrayProperties"`
	ContainerOverrides *SubmitJobRequestBodyContainerOverrides `json:"containerOverrides"`
	DependsOn          []shared.JobDependency                  `json:"dependsOn"`
	JobDefinition      string                                  `json:"jobDefinition"`
	JobName            string                                  `json:"jobName"`
	JobQueue           string                                  `json:"jobQueue"`
	NodeOverrides      *SubmitJobRequestBodyNodeOverrides      `json:"nodeOverrides"`
	Parameters         map[string]string                       `json:"parameters"`
	PropagateTags      *bool                                   `json:"propagateTags"`
	RetryStrategy      *SubmitJobRequestBodyRetryStrategy      `json:"retryStrategy"`
	Tags               map[string]string                       `json:"tags"`
	Timeout            *SubmitJobRequestBodyTimeout            `json:"timeout"`
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
