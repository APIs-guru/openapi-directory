package shared

type GetViolationDetailsRequest struct {
	MemberAccount string `json:"MemberAccount"`
	PolicyID      string `json:"PolicyId"`
	ResourceID    string `json:"ResourceId"`
	ResourceType  string `json:"ResourceType"`
}
