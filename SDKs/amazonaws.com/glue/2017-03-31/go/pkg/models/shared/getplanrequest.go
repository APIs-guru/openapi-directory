package shared

type GetPlanRequest struct {
	AdditionalPlanOptionsMap map[string]string `json:"AdditionalPlanOptionsMap"`
	Language                 *LanguageEnum     `json:"Language"`
	Location                 *Location         `json:"Location"`
	Mapping                  []MappingEntry    `json:"Mapping"`
	Sinks                    []CatalogEntry    `json:"Sinks"`
	Source                   CatalogEntry      `json:"Source"`
}
