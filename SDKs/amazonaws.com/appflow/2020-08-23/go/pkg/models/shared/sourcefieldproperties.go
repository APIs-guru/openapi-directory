package shared

// SourceFieldProperties
//
//	The properties that can be applied to a field when the connector is being used as a source.
type SourceFieldProperties struct {
	IsQueryable   *bool `json:"isQueryable,omitempty"`
	IsRetrievable *bool `json:"isRetrievable,omitempty"`
}
