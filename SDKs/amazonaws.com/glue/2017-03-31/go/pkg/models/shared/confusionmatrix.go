package shared

// ConfusionMatrix
// <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p> <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
type ConfusionMatrix struct {
	NumFalseNegatives *int64 `json:"NumFalseNegatives,omitempty"`
	NumFalsePositives *int64 `json:"NumFalsePositives,omitempty"`
	NumTrueNegatives  *int64 `json:"NumTrueNegatives,omitempty"`
	NumTruePositives  *int64 `json:"NumTruePositives,omitempty"`
}
