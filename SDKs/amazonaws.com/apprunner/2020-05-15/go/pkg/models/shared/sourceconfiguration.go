package shared

// SourceConfiguration
// Describes the source deployed to an AWS App Runner service. It can be a code or an image repository.
type SourceConfiguration struct {
	AuthenticationConfiguration *AuthenticationConfiguration `json:"AuthenticationConfiguration,omitempty"`
	AutoDeploymentsEnabled      *bool                        `json:"AutoDeploymentsEnabled,omitempty"`
	CodeRepository              *CodeRepository              `json:"CodeRepository,omitempty"`
	ImageRepository             *ImageRepository             `json:"ImageRepository,omitempty"`
}
