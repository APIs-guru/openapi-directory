package shared



type CreatePullRequestInput struct {
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    Description *string `json:"description,omitempty"`
    Targets []Target `json:"targets"`
    Title string `json:"title"`
    
}

