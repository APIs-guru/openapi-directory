package shared

type VeevaSourceProperties struct {
	DocumentType       *string `json:"documentType,omitempty"`
	IncludeAllVersions *bool   `json:"includeAllVersions,omitempty"`
	IncludeRenditions  *bool   `json:"includeRenditions,omitempty"`
	IncludeSourceFiles *bool   `json:"includeSourceFiles,omitempty"`
	Object             string  `json:"object"`
}
