package shared

// ImageRepository
// Describes a source image repository.
type ImageRepository struct {
	ImageConfiguration  *ImageConfiguration     `json:"ImageConfiguration,omitempty"`
	ImageIdentifier     string                  `json:"ImageIdentifier"`
	ImageRepositoryType ImageRepositoryTypeEnum `json:"ImageRepositoryType"`
}
