package shared

type UpdateProjectVisibilityInput struct {
	ProjectArn         string                    `json:"projectArn"`
	ProjectVisibility  ProjectVisibilityTypeEnum `json:"projectVisibility"`
	ResourceAccessRole *string                   `json:"resourceAccessRole"`
}
