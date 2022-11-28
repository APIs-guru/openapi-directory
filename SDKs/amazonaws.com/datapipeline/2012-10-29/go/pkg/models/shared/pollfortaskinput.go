package shared

// PollForTaskInput
// Contains the parameters for PollForTask.
type PollForTaskInput struct {
	Hostname         *string           `json:"hostname,omitempty"`
	InstanceIdentity *InstanceIdentity `json:"instanceIdentity,omitempty"`
	WorkerGroup      string            `json:"workerGroup"`
}
