package shared

type CreateHsmRequest struct {
	ClientToken      *string              `json:"ClientToken,omitempty"`
	EniIP            *string              `json:"EniIp,omitempty"`
	ExternalID       *string              `json:"ExternalId,omitempty"`
	IamRoleArn       string               `json:"IamRoleArn"`
	SSHKey           string               `json:"SshKey"`
	SubnetID         string               `json:"SubnetId"`
	SubscriptionType SubscriptionTypeEnum `json:"SubscriptionType"`
	SyslogIP         *string              `json:"SyslogIp,omitempty"`
}
