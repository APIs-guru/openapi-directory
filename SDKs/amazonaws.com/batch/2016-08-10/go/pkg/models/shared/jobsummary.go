package shared

type JobSummary struct {
	ArrayProperties *ArrayPropertiesSummary `json:"arrayProperties,omitempty"`
	Container       *ContainerSummary       `json:"container,omitempty"`
	CreatedAt       *int64                  `json:"createdAt,omitempty"`
	JobArn          *string                 `json:"jobArn,omitempty"`
	JobDefinition   *string                 `json:"jobDefinition,omitempty"`
	JobID           string                  `json:"jobId"`
	JobName         string                  `json:"jobName"`
	NodeProperties  *NodePropertiesSummary  `json:"nodeProperties,omitempty"`
	StartedAt       *int64                  `json:"startedAt,omitempty"`
	Status          *JobStatusEnum          `json:"status,omitempty"`
	StatusReason    *string                 `json:"statusReason,omitempty"`
	StoppedAt       *int64                  `json:"stoppedAt,omitempty"`
}
