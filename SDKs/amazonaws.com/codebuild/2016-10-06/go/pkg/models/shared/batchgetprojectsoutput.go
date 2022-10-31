package shared

type BatchGetProjectsOutput struct {
	Projects         []Project `json:"projects,omitempty"`
	ProjectsNotFound []string  `json:"projectsNotFound,omitempty"`
}
