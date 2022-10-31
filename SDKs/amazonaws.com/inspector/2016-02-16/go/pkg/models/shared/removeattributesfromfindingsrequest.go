package shared

type RemoveAttributesFromFindingsRequest struct {
	AttributeKeys []string `json:"attributeKeys"`
	FindingArns   []string `json:"findingArns"`
}
