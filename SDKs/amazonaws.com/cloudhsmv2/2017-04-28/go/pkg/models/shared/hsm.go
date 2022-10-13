package shared

type Hsm struct {
	AvailabilityZone *string       `json:"AvailabilityZone"`
	ClusterID        *string       `json:"ClusterId"`
	EniID            *string       `json:"EniId"`
	EniIP            *string       `json:"EniIp"`
	HsmID            string        `json:"HsmId"`
	State            *HsmStateEnum `json:"State"`
	StateMessage     *string       `json:"StateMessage"`
	SubnetID         *string       `json:"SubnetId"`
}
