package shared

type GetComplianceDetailRequest struct {
	MemberAccount string `json:"MemberAccount"`
	PolicyID      string `json:"PolicyId"`
}
