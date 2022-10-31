package shared



type InputDataConfig struct {
    DatasetGroupArn string `json:"DatasetGroupArn"`
    SupplementaryFeatures []SupplementaryFeature `json:"SupplementaryFeatures,omitempty"`
    
}

