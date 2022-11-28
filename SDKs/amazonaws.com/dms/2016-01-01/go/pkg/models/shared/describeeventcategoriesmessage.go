package shared

// DescribeEventCategoriesMessage
// <p/>
type DescribeEventCategoriesMessage struct {
	Filters    []Filter `json:"Filters,omitempty"`
	SourceType *string  `json:"SourceType,omitempty"`
}
