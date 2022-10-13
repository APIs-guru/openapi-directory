package shared

type RunTaskResponse struct {
	Failures []Failure `json:"failures"`
	Tasks    []Task    `json:"tasks"`
}
