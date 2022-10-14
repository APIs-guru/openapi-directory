package shared

type DescribeBudgetActionHistoriesResponse struct {
	ActionHistories []ActionHistory `json:"ActionHistories"`
	NextToken       *string         `json:"NextToken,omitempty"`
}
