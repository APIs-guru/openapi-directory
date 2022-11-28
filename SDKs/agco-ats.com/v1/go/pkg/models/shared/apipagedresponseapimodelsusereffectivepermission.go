package shared

// APIPagedResponseAPIModelsUserEffectivePermission
// A response containing a page of results and metadata concerning the results
type APIPagedResponseAPIModelsUserEffectivePermission struct {
	Entities []APIModelsUserEffectivePermission `json:"Entities"`
	Metadata APIPagedResponseMetadata           `json:"Metadata"`
}
