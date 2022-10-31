package shared

type RunTaskResponse struct {
	Failures []Failure `json:"failures,omitempty"`
	Tasks    []Task    `json:"tasks,omitempty"`
}
