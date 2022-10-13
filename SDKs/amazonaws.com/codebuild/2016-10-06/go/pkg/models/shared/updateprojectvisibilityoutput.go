package shared

type UpdateProjectVisibilityOutput struct {
	ProjectArn         *string                    `json:"projectArn"`
	ProjectVisibility  *ProjectVisibilityTypeEnum `json:"projectVisibility"`
	PublicProjectAlias *string                    `json:"publicProjectAlias"`
}
