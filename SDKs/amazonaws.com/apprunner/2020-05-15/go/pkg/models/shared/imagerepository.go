package shared

type ImageRepository struct {
	ImageConfiguration  *ImageConfiguration     `json:"ImageConfiguration"`
	ImageIdentifier     string                  `json:"ImageIdentifier"`
	ImageRepositoryType ImageRepositoryTypeEnum `json:"ImageRepositoryType"`
}
