package shared

type GetDeviceDefinitionVersionResponse struct {
	Arn               *string                  `json:"Arn"`
	CreationTimestamp *string                  `json:"CreationTimestamp"`
	Definition        *DeviceDefinitionVersion `json:"Definition"`
	ID                *string                  `json:"Id"`
	NextToken         *string                  `json:"NextToken"`
	Version           *string                  `json:"Version"`
}
