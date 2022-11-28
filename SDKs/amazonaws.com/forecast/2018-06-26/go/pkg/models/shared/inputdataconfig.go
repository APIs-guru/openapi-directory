package shared

// InputDataConfig
// The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request.
type InputDataConfig struct {
	DatasetGroupArn       string                 `json:"DatasetGroupArn"`
	SupplementaryFeatures []SupplementaryFeature `json:"SupplementaryFeatures,omitempty"`
}
