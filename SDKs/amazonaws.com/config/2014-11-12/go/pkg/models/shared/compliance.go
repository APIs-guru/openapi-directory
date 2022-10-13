package shared

type Compliance struct {
	ComplianceContributorCount *ComplianceContributorCount `json:"ComplianceContributorCount"`
	ComplianceType             *ComplianceTypeEnum         `json:"ComplianceType"`
}
