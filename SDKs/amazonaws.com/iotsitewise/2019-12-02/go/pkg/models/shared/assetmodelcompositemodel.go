package shared



type AssetModelCompositeModel struct {
    Description *string `json:"description,omitempty"`
    Name string `json:"name"`
    Properties *interface{} `json:"properties,omitempty"`
    Type string `json:"type"`
    
}

