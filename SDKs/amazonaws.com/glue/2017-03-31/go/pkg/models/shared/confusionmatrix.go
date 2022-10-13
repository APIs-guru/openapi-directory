package shared

type ConfusionMatrix struct {
	NumFalseNegatives *int64 `json:"NumFalseNegatives"`
	NumFalsePositives *int64 `json:"NumFalsePositives"`
	NumTrueNegatives  *int64 `json:"NumTrueNegatives"`
	NumTruePositives  *int64 `json:"NumTruePositives"`
}
