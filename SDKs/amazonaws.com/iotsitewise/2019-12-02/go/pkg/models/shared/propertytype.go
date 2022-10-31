package shared



type PropertyType struct {
    Attribute *Attribute `json:"attribute,omitempty"`
    Measurement *Measurement `json:"measurement,omitempty"`
    Metric *Metric `json:"metric,omitempty"`
    Transform *Transform `json:"transform,omitempty"`
    
}

