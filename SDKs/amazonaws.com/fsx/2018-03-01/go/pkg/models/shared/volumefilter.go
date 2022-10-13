package shared

type VolumeFilter struct {
	Name   *VolumeFilterNameEnum `json:"Name"`
	Values []string              `json:"Values"`
}
