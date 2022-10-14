package shared

type ComplianceByResource struct {
	Compliance   *Compliance `json:"Compliance,omitempty"`
	ResourceID   *string     `json:"ResourceId,omitempty"`
	ResourceType *string     `json:"ResourceType,omitempty"`
}
