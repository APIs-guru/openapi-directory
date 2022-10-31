package shared

import (
"time")

type ConfigurationAggregator struct {
    AccountAggregationSources []AccountAggregationSource `json:"AccountAggregationSources,omitempty"`
    ConfigurationAggregatorArn *string `json:"ConfigurationAggregatorArn,omitempty"`
    ConfigurationAggregatorName *string `json:"ConfigurationAggregatorName,omitempty"`
    CreatedBy *string `json:"CreatedBy,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    LastUpdatedTime *time.Time `json:"LastUpdatedTime,omitempty"`
    OrganizationAggregationSource *OrganizationAggregationSource `json:"OrganizationAggregationSource,omitempty"`
    
}

