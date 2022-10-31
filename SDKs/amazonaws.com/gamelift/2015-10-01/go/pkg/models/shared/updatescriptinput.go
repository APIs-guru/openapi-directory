package shared



type UpdateScriptInput struct {
    Name *string `json:"Name,omitempty"`
    ScriptID string `json:"ScriptId"`
    StorageLocation *S3Location `json:"StorageLocation,omitempty"`
    Version *string `json:"Version,omitempty"`
    ZipFile *string `json:"ZipFile,omitempty"`
    
}

