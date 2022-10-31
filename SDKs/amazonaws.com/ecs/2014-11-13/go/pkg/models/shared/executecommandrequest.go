package shared

type ExecuteCommandRequest struct {
	Cluster     *string `json:"cluster,omitempty"`
	Command     string  `json:"command"`
	Container   *string `json:"container,omitempty"`
	Interactive bool    `json:"interactive"`
	Task        string  `json:"task"`
}
