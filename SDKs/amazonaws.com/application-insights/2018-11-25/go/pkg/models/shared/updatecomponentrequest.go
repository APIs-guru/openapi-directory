package shared

type UpdateComponentRequest struct {
	ComponentName     string   `json:"ComponentName"`
	NewComponentName  *string  `json:"NewComponentName,omitempty"`
	ResourceGroupName string   `json:"ResourceGroupName"`
	ResourceList      []string `json:"ResourceList,omitempty"`
}
