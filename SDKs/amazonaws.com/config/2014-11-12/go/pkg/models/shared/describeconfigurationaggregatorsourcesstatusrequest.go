package shared



type DescribeConfigurationAggregatorSourcesStatusRequest struct {
    ConfigurationAggregatorName string `json:"ConfigurationAggregatorName"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    UpdateStatus []AggregatedSourceStatusTypeEnum `json:"UpdateStatus,omitempty"`
    
}

