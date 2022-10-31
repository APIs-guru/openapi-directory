package shared



type AddonInfo struct {
    AddonName *string `json:"addonName,omitempty"`
    AddonVersions []AddonVersionInfo `json:"addonVersions,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

