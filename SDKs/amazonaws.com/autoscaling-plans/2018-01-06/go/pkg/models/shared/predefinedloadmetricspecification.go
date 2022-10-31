package shared



type PredefinedLoadMetricSpecification struct {
    PredefinedLoadMetricType LoadMetricTypeEnum `json:"PredefinedLoadMetricType"`
    ResourceLabel *string `json:"ResourceLabel,omitempty"`
    
}

