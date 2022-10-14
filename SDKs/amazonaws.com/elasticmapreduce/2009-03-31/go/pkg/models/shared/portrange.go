package shared

type PortRange struct {
	MaxRange *int64 `json:"MaxRange,omitempty"`
	MinRange int64  `json:"MinRange"`
}
