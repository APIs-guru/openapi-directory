package shared

// Target
// Information about the SNS topics associated with a notification rule.
type Target struct {
	TargetAddress *string `json:"TargetAddress,omitempty"`
	TargetType    *string `json:"TargetType,omitempty"`
}
