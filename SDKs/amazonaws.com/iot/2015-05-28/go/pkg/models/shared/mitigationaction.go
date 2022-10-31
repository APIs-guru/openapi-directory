package shared



type MitigationAction struct {
    ActionParams *MitigationActionParams `json:"actionParams,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

