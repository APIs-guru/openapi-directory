package shared

type JobQueueDetail struct {
	ComputeEnvironmentOrder []ComputeEnvironmentOrder `json:"computeEnvironmentOrder"`
	JobQueueArn             string                    `json:"jobQueueArn"`
	JobQueueName            string                    `json:"jobQueueName"`
	Priority                int64                     `json:"priority"`
	State                   JqStateEnum               `json:"state"`
	Status                  *JqStatusEnum             `json:"status"`
	StatusReason            *string                   `json:"statusReason"`
	Tags                    map[string]string         `json:"tags"`
}
