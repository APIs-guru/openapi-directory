package shared



type BatchDeleteBuildsOutput struct {
    BuildsDeleted []string `json:"buildsDeleted,omitempty"`
    BuildsNotDeleted []BuildNotDeleted `json:"buildsNotDeleted,omitempty"`
    
}

