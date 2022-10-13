package shared

type DescribeFindingsResponse struct {
	FailedItems map[string]FailedItemDetails `json:"failedItems"`
	Findings    []Finding                    `json:"findings"`
}
