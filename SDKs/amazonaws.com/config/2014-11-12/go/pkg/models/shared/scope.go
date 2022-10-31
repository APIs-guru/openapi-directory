package shared



type Scope struct {
    ComplianceResourceID *string `json:"ComplianceResourceId,omitempty"`
    ComplianceResourceTypes []string `json:"ComplianceResourceTypes,omitempty"`
    TagKey *string `json:"TagKey,omitempty"`
    TagValue *string `json:"TagValue,omitempty"`
    
}

