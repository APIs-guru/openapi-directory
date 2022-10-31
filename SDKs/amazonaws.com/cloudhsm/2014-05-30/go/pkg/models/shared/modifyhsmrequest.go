package shared



type ModifyHsmRequest struct {
    EniIP *string `json:"EniIp,omitempty"`
    ExternalID *string `json:"ExternalId,omitempty"`
    HsmArn string `json:"HsmArn"`
    IamRoleArn *string `json:"IamRoleArn,omitempty"`
    SubnetID *string `json:"SubnetId,omitempty"`
    SyslogIP *string `json:"SyslogIp,omitempty"`
    
}

