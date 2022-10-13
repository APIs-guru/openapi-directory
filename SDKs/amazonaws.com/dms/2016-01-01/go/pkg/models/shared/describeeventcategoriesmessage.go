package shared

type DescribeEventCategoriesMessage struct {
	Filters    []Filter `json:"Filters"`
	SourceType *string  `json:"SourceType"`
}
