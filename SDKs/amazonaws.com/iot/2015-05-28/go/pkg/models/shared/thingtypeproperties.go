package shared

// ThingTypeProperties
// The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
type ThingTypeProperties struct {
	SearchableAttributes []string `json:"searchableAttributes,omitempty"`
	ThingTypeDescription *string  `json:"thingTypeDescription,omitempty"`
}
