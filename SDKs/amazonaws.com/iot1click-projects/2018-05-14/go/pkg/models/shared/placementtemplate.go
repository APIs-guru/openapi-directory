package shared



type PlacementTemplate struct {
    DefaultAttributes map[string]string `json:"defaultAttributes,omitempty"`
    DeviceTemplates map[string]DeviceTemplate `json:"deviceTemplates,omitempty"`
    
}

