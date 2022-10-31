package shared



type GetComponentResponse struct {
    Recipe string `json:"recipe"`
    RecipeOutputFormat RecipeOutputFormatEnum `json:"recipeOutputFormat"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

