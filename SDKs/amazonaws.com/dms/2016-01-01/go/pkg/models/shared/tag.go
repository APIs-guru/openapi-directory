package shared

type Tag struct {
	Key         *string `json:"Key,omitempty"`
	ResourceArn *string `json:"ResourceArn,omitempty"`
	Value       *string `json:"Value,omitempty"`
}
