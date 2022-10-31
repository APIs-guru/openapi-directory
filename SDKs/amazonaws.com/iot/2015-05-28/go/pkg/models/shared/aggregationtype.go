package shared



type AggregationType struct {
    Name AggregationTypeNameEnum `json:"name"`
    Values []string `json:"values,omitempty"`
    
}

