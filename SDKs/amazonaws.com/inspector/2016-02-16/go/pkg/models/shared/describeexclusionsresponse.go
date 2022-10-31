package shared

type DescribeExclusionsResponse struct {
	Exclusions  map[string]Exclusion         `json:"exclusions"`
	FailedItems map[string]FailedItemDetails `json:"failedItems"`
}
