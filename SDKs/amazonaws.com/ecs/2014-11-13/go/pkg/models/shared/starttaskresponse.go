package shared

type StartTaskResponse struct {
	Failures []Failure `json:"failures"`
	Tasks    []Task    `json:"tasks"`
}
