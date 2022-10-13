package shared

type PortRange struct {
	MaxRange *int64 `json:"MaxRange"`
	MinRange int64  `json:"MinRange"`
}
