package shared

type UnshareTarget struct {
	ID   string         `json:"Id"`
	Type TargetTypeEnum `json:"Type"`
}
