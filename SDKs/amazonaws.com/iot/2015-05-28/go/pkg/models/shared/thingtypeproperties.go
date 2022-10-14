package shared

type ThingTypeProperties struct {
	SearchableAttributes []string `json:"searchableAttributes,omitempty"`
	ThingTypeDescription *string  `json:"thingTypeDescription,omitempty"`
}
