package shared



type Issue struct {
    Code *NodegroupIssueCodeEnum `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    ResourceIds []string `json:"resourceIds,omitempty"`
    
}

