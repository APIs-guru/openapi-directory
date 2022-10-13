package shared

type PollForTaskInput struct {
	Hostname         *string           `json:"hostname"`
	InstanceIdentity *InstanceIdentity `json:"instanceIdentity"`
	WorkerGroup      string            `json:"workerGroup"`
}
