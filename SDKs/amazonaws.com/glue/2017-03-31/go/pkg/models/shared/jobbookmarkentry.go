package shared

type JobBookmarkEntry struct {
	Attempt       *int64  `json:"Attempt"`
	JobBookmark   *string `json:"JobBookmark"`
	JobName       *string `json:"JobName"`
	PreviousRunID *string `json:"PreviousRunId"`
	Run           *int64  `json:"Run"`
	RunID         *string `json:"RunId"`
	Version       *int64  `json:"Version"`
}
