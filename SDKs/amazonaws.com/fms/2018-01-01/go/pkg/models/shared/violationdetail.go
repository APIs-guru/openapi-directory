package shared

type ViolationDetail struct {
	MemberAccount       string              `json:"MemberAccount"`
	PolicyID            string              `json:"PolicyId"`
	ResourceDescription *string             `json:"ResourceDescription,omitempty"`
	ResourceID          string              `json:"ResourceId"`
	ResourceTags        []Tag               `json:"ResourceTags,omitempty"`
	ResourceType        string              `json:"ResourceType"`
	ResourceViolations  []ResourceViolation `json:"ResourceViolations"`
}
