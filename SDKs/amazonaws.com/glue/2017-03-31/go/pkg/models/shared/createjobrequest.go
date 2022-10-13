package shared

type CreateJobRequest struct {
	AllocatedCapacity       *int64                `json:"AllocatedCapacity"`
	Command                 JobCommand            `json:"Command"`
	Connections             *ConnectionsList      `json:"Connections"`
	DefaultArguments        map[string]string     `json:"DefaultArguments"`
	Description             *string               `json:"Description"`
	ExecutionProperty       *ExecutionProperty    `json:"ExecutionProperty"`
	GlueVersion             *string               `json:"GlueVersion"`
	LogURI                  *string               `json:"LogUri"`
	MaxCapacity             *float64              `json:"MaxCapacity"`
	MaxRetries              *int64                `json:"MaxRetries"`
	Name                    string                `json:"Name"`
	NonOverridableArguments map[string]string     `json:"NonOverridableArguments"`
	NotificationProperty    *NotificationProperty `json:"NotificationProperty"`
	NumberOfWorkers         *int64                `json:"NumberOfWorkers"`
	Role                    string                `json:"Role"`
	SecurityConfiguration   *string               `json:"SecurityConfiguration"`
	Tags                    map[string]string     `json:"Tags"`
	Timeout                 *int64                `json:"Timeout"`
	WorkerType              *WorkerTypeEnum       `json:"WorkerType"`
}
