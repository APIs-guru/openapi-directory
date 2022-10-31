package shared



type ImageRepository struct {
    ImageConfiguration *ImageConfiguration `json:"ImageConfiguration,omitempty"`
    ImageIdentifier string `json:"ImageIdentifier"`
    ImageRepositoryType ImageRepositoryTypeEnum `json:"ImageRepositoryType"`
    
}

