package shared

type UniqueProblem struct {
	Message  *string   `json:"message"`
	Problems []Problem `json:"problems"`
}
