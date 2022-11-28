package shared

// EventCategoriesMap
// An event source type, accompanied by one or more event category names.
type EventCategoriesMap struct {
	EventCategories []string
	SourceType      *string
}
