package shared



type S3Target struct {
    ConnectionName *string `json:"ConnectionName,omitempty"`
    Exclusions []string `json:"Exclusions,omitempty"`
    Path *string `json:"Path,omitempty"`
    SampleSize *int64 `json:"SampleSize,omitempty"`
    
}

