package shared



type UpdateLocationSmbRequest struct {
    AgentArns []string `json:"AgentArns,omitempty"`
    Domain *string `json:"Domain,omitempty"`
    LocationArn string `json:"LocationArn"`
    MountOptions *SmbMountOptions `json:"MountOptions,omitempty"`
    Password *string `json:"Password,omitempty"`
    Subdirectory *string `json:"Subdirectory,omitempty"`
    User *string `json:"User,omitempty"`
    
}

