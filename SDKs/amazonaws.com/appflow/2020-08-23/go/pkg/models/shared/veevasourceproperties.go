package shared

type VeevaSourceProperties struct {
	DocumentType       *string `json:"documentType"`
	IncludeAllVersions *bool   `json:"includeAllVersions"`
	IncludeRenditions  *bool   `json:"includeRenditions"`
	IncludeSourceFiles *bool   `json:"includeSourceFiles"`
	Object             string  `json:"object"`
}
