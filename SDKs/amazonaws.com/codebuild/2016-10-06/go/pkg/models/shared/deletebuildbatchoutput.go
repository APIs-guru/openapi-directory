package shared

type DeleteBuildBatchOutput struct {
	BuildsDeleted    []string          `json:"buildsDeleted"`
	BuildsNotDeleted []BuildNotDeleted `json:"buildsNotDeleted"`
	StatusCode       *string           `json:"statusCode"`
}
