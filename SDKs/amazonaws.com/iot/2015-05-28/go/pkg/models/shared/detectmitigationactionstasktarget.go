package shared

type DetectMitigationActionsTaskTarget struct {
	BehaviorName        *string  `json:"behaviorName"`
	SecurityProfileName *string  `json:"securityProfileName"`
	ViolationIds        []string `json:"violationIds"`
}
