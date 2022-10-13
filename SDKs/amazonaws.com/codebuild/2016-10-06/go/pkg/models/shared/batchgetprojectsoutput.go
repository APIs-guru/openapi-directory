package shared

type BatchGetProjectsOutput struct {
	Projects         []Project `json:"projects"`
	ProjectsNotFound []string  `json:"projectsNotFound"`
}
