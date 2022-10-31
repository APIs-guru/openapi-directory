package shared



type DeleteProjectRequest struct {
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    DeleteStack *bool `json:"deleteStack,omitempty"`
    ID string `json:"id"`
    
}

