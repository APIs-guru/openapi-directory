package shared

type UpdateComponentRequest struct {
	ComponentName     string   `json:"ComponentName"`
	NewComponentName  *string  `json:"NewComponentName"`
	ResourceGroupName string   `json:"ResourceGroupName"`
	ResourceList      []string `json:"ResourceList"`
}
