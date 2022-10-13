package shared

type ArrayPropertiesDetail struct {
	Index         *int64           `json:"index"`
	Size          *int64           `json:"size"`
	StatusSummary map[string]int64 `json:"statusSummary"`
}
