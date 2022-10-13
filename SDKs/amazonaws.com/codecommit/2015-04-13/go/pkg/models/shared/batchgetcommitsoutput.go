package shared

type BatchGetCommitsOutput struct {
	Commits []Commit               `json:"commits"`
	Errors  []BatchGetCommitsError `json:"errors"`
}
