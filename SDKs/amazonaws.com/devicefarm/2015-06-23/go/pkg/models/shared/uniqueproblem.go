package shared



type UniqueProblem struct {
    Message *string `json:"message,omitempty"`
    Problems []Problem `json:"problems,omitempty"`
    
}

