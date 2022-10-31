package shared



type UpdateLocationNfsRequest struct {
    LocationArn string `json:"LocationArn"`
    MountOptions *NfsMountOptions `json:"MountOptions,omitempty"`
    OnPremConfig *OnPremConfig `json:"OnPremConfig,omitempty"`
    Subdirectory *string `json:"Subdirectory,omitempty"`
    
}

