package shared

type BatchDeleteBuildsOutput struct {
	BuildsDeleted    []string          `json:"buildsDeleted"`
	BuildsNotDeleted []BuildNotDeleted `json:"buildsNotDeleted"`
}
