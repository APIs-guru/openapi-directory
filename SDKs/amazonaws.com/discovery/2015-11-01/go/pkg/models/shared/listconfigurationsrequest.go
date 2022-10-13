package shared

type ListConfigurationsRequest struct {
	ConfigurationType ConfigurationItemTypeEnum `json:"configurationType"`
	Filters           []Filter                  `json:"filters"`
	MaxResults        *int64                    `json:"maxResults"`
	NextToken         *string                   `json:"nextToken"`
	OrderBy           []OrderByElement          `json:"orderBy"`
}
