package shared

type GetPlanRequest struct {
	AdditionalPlanOptionsMap map[string]string `json:"AdditionalPlanOptionsMap,omitempty"`
	Language                 *LanguageEnum     `json:"Language,omitempty"`
	Location                 *Location         `json:"Location,omitempty"`
	Mapping                  []MappingEntry    `json:"Mapping"`
	Sinks                    []CatalogEntry    `json:"Sinks,omitempty"`
	Source                   CatalogEntry      `json:"Source"`
}
