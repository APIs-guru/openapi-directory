package shared

type Scope struct {
	ComplianceResourceID    *string  `json:"ComplianceResourceId"`
	ComplianceResourceTypes []string `json:"ComplianceResourceTypes"`
	TagKey                  *string  `json:"TagKey"`
	TagValue                *string  `json:"TagValue"`
}
