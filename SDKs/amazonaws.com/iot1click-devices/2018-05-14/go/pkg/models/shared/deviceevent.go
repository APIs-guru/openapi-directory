package shared

type DeviceEvent struct {
	Device   *Device `json:"Device,omitempty"`
	StdEvent *string `json:"StdEvent,omitempty"`
}
