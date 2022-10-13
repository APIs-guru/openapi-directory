package shared

type Ec2InstanceCounts struct {
	Active      *int64 `json:"ACTIVE"`
	Desired     *int64 `json:"DESIRED"`
	Idle        *int64 `json:"IDLE"`
	Maximum     *int64 `json:"MAXIMUM"`
	Minimum     *int64 `json:"MINIMUM"`
	Pending     *int64 `json:"PENDING"`
	Terminating *int64 `json:"TERMINATING"`
}
