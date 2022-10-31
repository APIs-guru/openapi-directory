package shared



type DocumentationPart struct {
    ID *string `json:"id,omitempty"`
    Location *DocumentationPartLocation `json:"location,omitempty"`
    Properties *interface{} `json:"properties,omitempty"`
    
}

