package shared



type CreateComponentRequest struct {
    ComponentName string `json:"ComponentName"`
    ResourceGroupName string `json:"ResourceGroupName"`
    ResourceList []string `json:"ResourceList"`
    
}

