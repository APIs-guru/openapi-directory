package shared



type UpdateProjectVisibilityOutput struct {
    ProjectArn *string `json:"projectArn,omitempty"`
    ProjectVisibility *ProjectVisibilityTypeEnum `json:"projectVisibility,omitempty"`
    PublicProjectAlias *string `json:"publicProjectAlias,omitempty"`
    
}

