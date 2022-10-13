package shared

type DeleteComponentRequest struct {
	ComponentName     string `json:"ComponentName"`
	ResourceGroupName string `json:"ResourceGroupName"`
}
