package shared

// GroupNameAndArn
// The name and ARN of a group.
type GroupNameAndArn struct {
	GroupArn  *string `json:"groupArn,omitempty"`
	GroupName *string `json:"groupName,omitempty"`
}
