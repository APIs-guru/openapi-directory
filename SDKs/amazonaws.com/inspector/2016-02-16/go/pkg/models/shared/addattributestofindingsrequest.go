package shared

type AddAttributesToFindingsRequest struct {
	Attributes  []Attribute `json:"attributes"`
	FindingArns []string    `json:"findingArns"`
}
