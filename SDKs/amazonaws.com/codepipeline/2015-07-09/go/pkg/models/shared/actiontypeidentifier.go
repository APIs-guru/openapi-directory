package shared



type ActionTypeIdentifier struct {
    Category ActionCategoryEnum `json:"category"`
    Owner string `json:"owner"`
    Provider string `json:"provider"`
    Version string `json:"version"`
    
}

