package shared

type DescribeResourceGroupsResponse struct {
	FailedItems    map[string]FailedItemDetails `json:"failedItems"`
	ResourceGroups []ResourceGroup              `json:"resourceGroups"`
}
