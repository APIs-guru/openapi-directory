package shared

type ListComplianceStatusRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	PolicyID   string  `json:"PolicyId"`
}
