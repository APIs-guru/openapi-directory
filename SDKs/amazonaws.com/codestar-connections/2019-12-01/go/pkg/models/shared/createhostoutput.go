package shared

type CreateHostOutput struct {
	HostArn *string `json:"HostArn"`
	Tags    []Tag   `json:"Tags"`
}
