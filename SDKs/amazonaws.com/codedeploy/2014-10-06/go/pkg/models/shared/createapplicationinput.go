package shared



type CreateApplicationInput struct {
    ApplicationName string `json:"applicationName"`
    ComputePlatform *ComputePlatformEnum `json:"computePlatform,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

