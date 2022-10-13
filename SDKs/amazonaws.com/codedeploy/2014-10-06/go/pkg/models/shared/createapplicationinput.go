package shared

type CreateApplicationInput struct {
	ApplicationName string               `json:"applicationName"`
	ComputePlatform *ComputePlatformEnum `json:"computePlatform"`
	Tags            []Tag                `json:"tags"`
}
