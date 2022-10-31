package shared



type DeleteCustomActionTypeInput struct {
    Category ActionCategoryEnum `json:"category"`
    Provider string `json:"provider"`
    Version string `json:"version"`
    
}

