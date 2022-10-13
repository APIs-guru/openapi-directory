package shared

type SourceConfiguration struct {
	AuthenticationConfiguration *AuthenticationConfiguration `json:"AuthenticationConfiguration"`
	AutoDeploymentsEnabled      *bool                        `json:"AutoDeploymentsEnabled"`
	CodeRepository              *CodeRepository              `json:"CodeRepository"`
	ImageRepository             *ImageRepository             `json:"ImageRepository"`
}
