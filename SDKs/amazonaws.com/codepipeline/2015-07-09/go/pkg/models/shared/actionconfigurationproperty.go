package shared

type ActionConfigurationProperty struct {
	Description *string                              `json:"description"`
	Key         bool                                 `json:"key"`
	Name        string                               `json:"name"`
	Queryable   *bool                                `json:"queryable"`
	Required    bool                                 `json:"required"`
	Secret      bool                                 `json:"secret"`
	Type        *ActionConfigurationPropertyTypeEnum `json:"type"`
}
