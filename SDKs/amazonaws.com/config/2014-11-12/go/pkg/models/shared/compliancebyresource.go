package shared

// ComplianceByResource
// Indicates whether an Amazon Web Services resource that is evaluated according to one or more Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.
type ComplianceByResource struct {
	Compliance   *Compliance `json:"Compliance,omitempty"`
	ResourceID   *string     `json:"ResourceId,omitempty"`
	ResourceType *string     `json:"ResourceType,omitempty"`
}
