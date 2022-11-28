package shared

// ModifyHsmRequest
// Contains the inputs for the <a>ModifyHsm</a> operation.
type ModifyHsmRequest struct {
	EniIP      *string `json:"EniIp,omitempty"`
	ExternalID *string `json:"ExternalId,omitempty"`
	HsmArn     string  `json:"HsmArn"`
	IamRoleArn *string `json:"IamRoleArn,omitempty"`
	SubnetID   *string `json:"SubnetId,omitempty"`
	SyslogIP   *string `json:"SyslogIp,omitempty"`
}
