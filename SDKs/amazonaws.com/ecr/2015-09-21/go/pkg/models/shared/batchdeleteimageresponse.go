package shared



type BatchDeleteImageResponse struct {
    Failures []ImageFailure `json:"failures,omitempty"`
    ImageIds []ImageIdentifier `json:"imageIds,omitempty"`
    
}

