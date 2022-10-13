package shared

type EventCategoryGroup struct {
	EventCategories []string `json:"EventCategories"`
	SourceType      *string  `json:"SourceType"`
}
