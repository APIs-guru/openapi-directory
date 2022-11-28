package shared

// PlacementTemplate
// An object defining the template for a placement.
type PlacementTemplate struct {
	DefaultAttributes map[string]string         `json:"defaultAttributes,omitempty"`
	DeviceTemplates   map[string]DeviceTemplate `json:"deviceTemplates,omitempty"`
}
