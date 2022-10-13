package shared

type SearchTablesRequest struct {
	CatalogID         *string                `json:"CatalogId"`
	Filters           []PropertyPredicate    `json:"Filters"`
	MaxResults        *int64                 `json:"MaxResults"`
	NextToken         *string                `json:"NextToken"`
	ResourceShareType *ResourceShareTypeEnum `json:"ResourceShareType"`
	SearchText        *string                `json:"SearchText"`
	SortCriteria      []SortCriterion        `json:"SortCriteria"`
}
