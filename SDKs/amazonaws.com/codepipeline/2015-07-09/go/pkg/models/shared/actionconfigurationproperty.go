package shared

// ActionConfigurationProperty
// Represents information about an action configuration property.
type ActionConfigurationProperty struct {
	Description *string                              `json:"description,omitempty"`
	Key         bool                                 `json:"key"`
	Name        string                               `json:"name"`
	Queryable   *bool                                `json:"queryable,omitempty"`
	Required    bool                                 `json:"required"`
	Secret      bool                                 `json:"secret"`
	Type        *ActionConfigurationPropertyTypeEnum `json:"type,omitempty"`
}
