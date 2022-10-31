package shared

type StartTaskResponse struct {
	Failures []Failure `json:"failures,omitempty"`
	Tasks    []Task    `json:"tasks,omitempty"`
}
