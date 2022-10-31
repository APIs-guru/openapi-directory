package shared

type GroupNameAndArn struct {
	GroupArn  *string `json:"groupArn,omitempty"`
	GroupName *string `json:"groupName,omitempty"`
}
