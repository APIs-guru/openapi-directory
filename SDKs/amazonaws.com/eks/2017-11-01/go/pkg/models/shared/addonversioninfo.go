package shared



type AddonVersionInfo struct {
    AddonVersion *string `json:"addonVersion,omitempty"`
    Architecture []string `json:"architecture,omitempty"`
    Compatibilities []Compatibility `json:"compatibilities,omitempty"`
    
}

