package shared

type GetResourceConfigHistoryResponse struct {
	ConfigurationItems []ConfigurationItem `json:"configurationItems"`
	NextToken          *string             `json:"nextToken"`
}
