package shared

// VolumeSpecification
// EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.
type VolumeSpecification struct {
	Iops       *int64 `json:"Iops,omitempty"`
	SizeInGb   int64  `json:"SizeInGB"`
	VolumeType string `json:"VolumeType"`
}
