package shared

type ComplianceByResource struct {
	Compliance   *Compliance `json:"Compliance"`
	ResourceID   *string     `json:"ResourceId"`
	ResourceType *string     `json:"ResourceType"`
}
