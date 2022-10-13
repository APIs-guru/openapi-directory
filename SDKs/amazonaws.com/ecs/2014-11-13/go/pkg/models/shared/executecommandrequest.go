package shared

type ExecuteCommandRequest struct {
	Cluster     *string `json:"cluster"`
	Command     string  `json:"command"`
	Container   *string `json:"container"`
	Interactive bool    `json:"interactive"`
	Task        string  `json:"task"`
}
