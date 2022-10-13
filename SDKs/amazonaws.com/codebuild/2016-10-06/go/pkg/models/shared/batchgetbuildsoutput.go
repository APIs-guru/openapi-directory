package shared

type BatchGetBuildsOutput struct {
	Builds         []Build  `json:"builds"`
	BuildsNotFound []string `json:"buildsNotFound"`
}
