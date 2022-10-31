package shared



type CreateScriptInput struct {
    Name *string `json:"Name,omitempty"`
    StorageLocation *S3Location `json:"StorageLocation,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    Version *string `json:"Version,omitempty"`
    ZipFile *string `json:"ZipFile,omitempty"`
    
}

