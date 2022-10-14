package shared

type StopTaskRequest struct {
	Cluster *string `json:"cluster,omitempty"`
	Reason  *string `json:"reason,omitempty"`
	Task    string  `json:"task"`
}
