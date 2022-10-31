package shared



type AddonIssue struct {
    Code *AddonIssueCodeEnum `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    ResourceIds []string `json:"resourceIds,omitempty"`
    
}

