package shared

// VeevaSourceProperties
//
//	The properties that are applied when using Veeva as a flow source.
type VeevaSourceProperties struct {
	DocumentType       *string `json:"documentType,omitempty"`
	IncludeAllVersions *bool   `json:"includeAllVersions,omitempty"`
	IncludeRenditions  *bool   `json:"includeRenditions,omitempty"`
	IncludeSourceFiles *bool   `json:"includeSourceFiles,omitempty"`
	Object             string  `json:"object"`
}
