package shared



type DeleteBuildBatchOutput struct {
    BuildsDeleted []string `json:"buildsDeleted,omitempty"`
    BuildsNotDeleted []BuildNotDeleted `json:"buildsNotDeleted,omitempty"`
    StatusCode *string `json:"statusCode,omitempty"`
    
}

