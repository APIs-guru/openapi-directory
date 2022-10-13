package shared

type CreateHsmRequest struct {
	ClientToken      *string              `json:"ClientToken"`
	EniIP            *string              `json:"EniIp"`
	ExternalID       *string              `json:"ExternalId"`
	IamRoleArn       string               `json:"IamRoleArn"`
	SSHKey           string               `json:"SshKey"`
	SubnetID         string               `json:"SubnetId"`
	SubscriptionType SubscriptionTypeEnum `json:"SubscriptionType"`
	SyslogIP         *string              `json:"SyslogIp"`
}
