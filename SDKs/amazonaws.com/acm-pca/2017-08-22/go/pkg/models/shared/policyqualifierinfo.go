package shared

// PolicyQualifierInfo
// Modifies the <code>CertPolicyId</code> of a <code>PolicyInformation</code> object with a qualifier. ACM Private CA supports the certification practice statement (CPS) qualifier.
type PolicyQualifierInfo struct {
	PolicyQualifierID PolicyQualifierIDEnum `json:"PolicyQualifierId"`
	Qualifier         Qualifier             `json:"Qualifier"`
}
