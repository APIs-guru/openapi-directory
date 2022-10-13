package shared

type DeleteResourceConfigRequest struct {
	ResourceID   string `json:"ResourceId"`
	ResourceType string `json:"ResourceType"`
}
