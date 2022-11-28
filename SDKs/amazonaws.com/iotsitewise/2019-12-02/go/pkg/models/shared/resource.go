package shared

// Resource
// Contains an IoT SiteWise Monitor resource ID for a portal or project.
type Resource struct {
	Portal  *PortalResource  `json:"portal,omitempty"`
	Project *ProjectResource `json:"project,omitempty"`
}
