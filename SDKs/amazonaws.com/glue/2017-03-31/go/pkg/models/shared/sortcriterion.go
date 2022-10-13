package shared

type SortCriterion struct {
	FieldName *string   `json:"FieldName"`
	Sort      *SortEnum `json:"Sort"`
}
