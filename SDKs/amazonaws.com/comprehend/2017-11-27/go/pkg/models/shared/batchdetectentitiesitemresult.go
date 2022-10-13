package shared

type BatchDetectEntitiesItemResult struct {
	Entities []Entity `json:"Entities"`
	Index    *int64   `json:"Index"`
}
