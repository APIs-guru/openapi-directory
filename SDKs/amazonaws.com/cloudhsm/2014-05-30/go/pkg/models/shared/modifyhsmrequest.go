package shared

type ModifyHsmRequest struct {
	EniIP      *string `json:"EniIp"`
	ExternalID *string `json:"ExternalId"`
	HsmArn     string  `json:"HsmArn"`
	IamRoleArn *string `json:"IamRoleArn"`
	SubnetID   *string `json:"SubnetId"`
	SyslogIP   *string `json:"SyslogIp"`
}
