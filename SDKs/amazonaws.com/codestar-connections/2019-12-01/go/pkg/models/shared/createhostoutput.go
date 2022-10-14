package shared

type CreateHostOutput struct {
	HostArn *string `json:"HostArn,omitempty"`
	Tags    []Tag   `json:"Tags,omitempty"`
}
