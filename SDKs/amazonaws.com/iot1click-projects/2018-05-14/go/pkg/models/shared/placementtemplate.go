package shared

type PlacementTemplate struct {
	DefaultAttributes map[string]string         `json:"defaultAttributes"`
	DeviceTemplates   map[string]DeviceTemplate `json:"deviceTemplates"`
}
