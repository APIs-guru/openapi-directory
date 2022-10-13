package shared

import (
	"time"
)

type ConfigurationAggregator struct {
	AccountAggregationSources     []AccountAggregationSource     `json:"AccountAggregationSources"`
	ConfigurationAggregatorArn    *string                        `json:"ConfigurationAggregatorArn"`
	ConfigurationAggregatorName   *string                        `json:"ConfigurationAggregatorName"`
	CreatedBy                     *string                        `json:"CreatedBy"`
	CreationTime                  *time.Time                     `json:"CreationTime"`
	LastUpdatedTime               *time.Time                     `json:"LastUpdatedTime"`
	OrganizationAggregationSource *OrganizationAggregationSource `json:"OrganizationAggregationSource"`
}
