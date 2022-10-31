package shared



type InstallStatusStatus struct {
    Finished *bool `json:"finished,omitempty"`
    ItemCount *int64 `json:"itemCount,omitempty"`
    
}

type InstallStatus struct {
    Status *InstallStatusStatus `json:"status,omitempty"`
    
}

