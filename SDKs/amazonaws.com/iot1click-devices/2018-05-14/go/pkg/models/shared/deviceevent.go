package shared

type DeviceEvent struct {
	Device   *Device `json:"Device"`
	StdEvent *string `json:"StdEvent"`
}
