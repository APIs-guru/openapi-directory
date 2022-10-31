package shared

type FrameworkMetadata struct {
	ComplianceType *string `json:"complianceType,omitempty"`
	Description    *string `json:"description,omitempty"`
	Logo           *string `json:"logo,omitempty"`
	Name           *string `json:"name,omitempty"`
}
