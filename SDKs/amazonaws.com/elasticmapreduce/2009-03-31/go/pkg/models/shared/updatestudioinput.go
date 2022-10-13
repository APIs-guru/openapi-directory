package shared

type UpdateStudioInput struct {
	DefaultS3Location *string  `json:"DefaultS3Location"`
	Description       *string  `json:"Description"`
	Name              *string  `json:"Name"`
	StudioID          string   `json:"StudioId"`
	SubnetIds         []string `json:"SubnetIds"`
}
