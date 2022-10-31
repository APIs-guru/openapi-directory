package shared



type BatchGetBuildsOutput struct {
    Builds []Build `json:"builds,omitempty"`
    BuildsNotFound []string `json:"buildsNotFound,omitempty"`
    
}

