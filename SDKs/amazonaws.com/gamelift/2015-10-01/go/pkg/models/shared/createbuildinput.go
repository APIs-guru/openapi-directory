package shared



type CreateBuildInput struct {
    Name *string `json:"Name,omitempty"`
    OperatingSystem *OperatingSystemEnum `json:"OperatingSystem,omitempty"`
    StorageLocation *S3Location `json:"StorageLocation,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    Version *string `json:"Version,omitempty"`
    
}

