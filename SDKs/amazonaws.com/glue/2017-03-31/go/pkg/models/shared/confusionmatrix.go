package shared



type ConfusionMatrix struct {
    NumFalseNegatives *int64 `json:"NumFalseNegatives,omitempty"`
    NumFalsePositives *int64 `json:"NumFalsePositives,omitempty"`
    NumTrueNegatives *int64 `json:"NumTrueNegatives,omitempty"`
    NumTruePositives *int64 `json:"NumTruePositives,omitempty"`
    
}

