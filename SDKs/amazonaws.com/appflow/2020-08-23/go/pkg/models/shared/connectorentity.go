package shared

type ConnectorEntity struct {
	HasNestedEntities *bool   `json:"hasNestedEntities"`
	Label             *string `json:"label"`
	Name              string  `json:"name"`
}
