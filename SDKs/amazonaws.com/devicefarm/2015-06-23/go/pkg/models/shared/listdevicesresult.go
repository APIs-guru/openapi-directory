package shared

type ListDevicesResult struct {
	Devices   []Device `json:"devices"`
	NextToken *string  `json:"nextToken"`
}
