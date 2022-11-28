package shared

// FrameworkMetadata
//
//	The metadata of a framework, such as the name, ID, description, and so on.
type FrameworkMetadata struct {
	ComplianceType *string `json:"complianceType,omitempty"`
	Description    *string `json:"description,omitempty"`
	Logo           *string `json:"logo,omitempty"`
	Name           *string `json:"name,omitempty"`
}
