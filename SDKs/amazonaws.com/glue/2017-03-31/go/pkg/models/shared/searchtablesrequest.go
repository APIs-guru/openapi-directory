package shared



type SearchTablesRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    Filters []PropertyPredicate `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceShareType *ResourceShareTypeEnum `json:"ResourceShareType,omitempty"`
    SearchText *string `json:"SearchText,omitempty"`
    SortCriteria []SortCriterion `json:"SortCriteria,omitempty"`
    
}

