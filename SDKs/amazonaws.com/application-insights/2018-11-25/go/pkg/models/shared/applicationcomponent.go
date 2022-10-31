package shared



type ApplicationComponent struct {
    ComponentName *string `json:"ComponentName,omitempty"`
    ComponentRemarks *string `json:"ComponentRemarks,omitempty"`
    DetectedWorkload map[string]map[string]string `json:"DetectedWorkload,omitempty"`
    Monitor *bool `json:"Monitor,omitempty"`
    OsType *OsTypeEnum `json:"OsType,omitempty"`
    ResourceType *string `json:"ResourceType,omitempty"`
    Tier *TierEnum `json:"Tier,omitempty"`
    
}

