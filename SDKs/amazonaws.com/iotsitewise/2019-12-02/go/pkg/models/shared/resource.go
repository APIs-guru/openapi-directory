package shared

type Resource struct {
	Portal  *PortalResource  `json:"portal"`
	Project *ProjectResource `json:"project"`
}
