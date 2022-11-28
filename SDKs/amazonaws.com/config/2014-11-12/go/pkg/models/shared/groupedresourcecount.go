package shared

// GroupedResourceCount
// The count of resources that are grouped by the group name.
type GroupedResourceCount struct {
	GroupName     string `json:"GroupName"`
	ResourceCount int64  `json:"ResourceCount"`
}
