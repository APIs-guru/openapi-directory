package shared



type UsagePlan struct {
    APIStages []APIStage `json:"apiStages,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    ProductCode *string `json:"productCode,omitempty"`
    Quota *QuotaSettings `json:"quota,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Throttle *ThrottleSettings `json:"throttle,omitempty"`
    
}

