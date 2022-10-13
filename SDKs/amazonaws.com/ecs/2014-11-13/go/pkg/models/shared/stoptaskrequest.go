package shared

type StopTaskRequest struct {
	Cluster *string `json:"cluster"`
	Reason  *string `json:"reason"`
	Task    string  `json:"task"`
}
