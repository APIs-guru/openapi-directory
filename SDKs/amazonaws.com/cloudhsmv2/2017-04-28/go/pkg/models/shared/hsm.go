package shared

// Hsm
// Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster.
type Hsm struct {
	AvailabilityZone *string       `json:"AvailabilityZone,omitempty"`
	ClusterID        *string       `json:"ClusterId,omitempty"`
	EniID            *string       `json:"EniId,omitempty"`
	EniIP            *string       `json:"EniIp,omitempty"`
	HsmID            string        `json:"HsmId"`
	State            *HsmStateEnum `json:"State,omitempty"`
	StateMessage     *string       `json:"StateMessage,omitempty"`
	SubnetID         *string       `json:"SubnetId,omitempty"`
}
