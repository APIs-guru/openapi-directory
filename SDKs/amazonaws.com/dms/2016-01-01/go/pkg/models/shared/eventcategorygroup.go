package shared



type EventCategoryGroup struct {
    EventCategories []string `json:"EventCategories,omitempty"`
    SourceType *string `json:"SourceType,omitempty"`
    
}

