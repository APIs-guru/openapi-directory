package shared



type ImageIdentifier struct {
    ImageDigest *string `json:"imageDigest,omitempty"`
    ImageTag *string `json:"imageTag,omitempty"`
    
}

