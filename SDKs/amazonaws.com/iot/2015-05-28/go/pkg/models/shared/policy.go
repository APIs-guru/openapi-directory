package shared

// Policy
// Describes an IoT policy.
type Policy struct {
	PolicyArn  *string `json:"policyArn,omitempty"`
	PolicyName *string `json:"policyName,omitempty"`
}
