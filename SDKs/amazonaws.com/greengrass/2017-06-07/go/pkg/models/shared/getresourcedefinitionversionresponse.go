package shared



type GetResourceDefinitionVersionResponse struct {
    Arn *string `json:"Arn,omitempty"`
    CreationTimestamp *string `json:"CreationTimestamp,omitempty"`
    Definition *ResourceDefinitionVersion `json:"Definition,omitempty"`
    ID *string `json:"Id,omitempty"`
    Version *string `json:"Version,omitempty"`
    
}

