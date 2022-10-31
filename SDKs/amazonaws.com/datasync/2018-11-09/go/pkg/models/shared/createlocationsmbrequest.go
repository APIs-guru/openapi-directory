package shared



type CreateLocationSmbRequest struct {
    AgentArns []string `json:"AgentArns"`
    Domain *string `json:"Domain,omitempty"`
    MountOptions *SmbMountOptions `json:"MountOptions,omitempty"`
    Password string `json:"Password"`
    ServerHostname string `json:"ServerHostname"`
    Subdirectory string `json:"Subdirectory"`
    Tags []TagListEntry `json:"Tags,omitempty"`
    User string `json:"User"`
    
}

