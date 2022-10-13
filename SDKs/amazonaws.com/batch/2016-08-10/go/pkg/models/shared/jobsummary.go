package shared

type JobSummary struct {
	ArrayProperties *ArrayPropertiesSummary `json:"arrayProperties"`
	Container       *ContainerSummary       `json:"container"`
	CreatedAt       *int64                  `json:"createdAt"`
	JobArn          *string                 `json:"jobArn"`
	JobDefinition   *string                 `json:"jobDefinition"`
	JobID           string                  `json:"jobId"`
	JobName         string                  `json:"jobName"`
	NodeProperties  *NodePropertiesSummary  `json:"nodeProperties"`
	StartedAt       *int64                  `json:"startedAt"`
	Status          *JobStatusEnum          `json:"status"`
	StatusReason    *string                 `json:"statusReason"`
	StoppedAt       *int64                  `json:"stoppedAt"`
}
