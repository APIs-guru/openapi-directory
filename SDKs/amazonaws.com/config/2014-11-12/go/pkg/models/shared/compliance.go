package shared

// Compliance
// Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance.
type Compliance struct {
	ComplianceContributorCount *ComplianceContributorCount `json:"ComplianceContributorCount,omitempty"`
	ComplianceType             *ComplianceTypeEnum         `json:"ComplianceType,omitempty"`
}
