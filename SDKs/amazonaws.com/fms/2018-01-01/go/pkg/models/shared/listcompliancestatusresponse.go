package shared

type ListComplianceStatusResponse struct {
	NextToken                  *string                  `json:"NextToken"`
	PolicyComplianceStatusList []PolicyComplianceStatus `json:"PolicyComplianceStatusList"`
}
