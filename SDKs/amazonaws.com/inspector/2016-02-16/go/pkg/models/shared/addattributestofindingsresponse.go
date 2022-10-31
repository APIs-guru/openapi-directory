package shared

type AddAttributesToFindingsResponse struct {
	FailedItems map[string]FailedItemDetails `json:"failedItems"`
}
