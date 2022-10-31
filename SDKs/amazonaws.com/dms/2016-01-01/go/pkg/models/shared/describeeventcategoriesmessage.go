package shared



type DescribeEventCategoriesMessage struct {
    Filters []Filter `json:"Filters,omitempty"`
    SourceType *string `json:"SourceType,omitempty"`
    
}

