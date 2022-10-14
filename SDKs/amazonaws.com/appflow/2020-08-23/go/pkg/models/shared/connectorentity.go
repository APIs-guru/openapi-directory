package shared

type ConnectorEntity struct {
	HasNestedEntities *bool   `json:"hasNestedEntities,omitempty"`
	Label             *string `json:"label,omitempty"`
	Name              string  `json:"name"`
}
