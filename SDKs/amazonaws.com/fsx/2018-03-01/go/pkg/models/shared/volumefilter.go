package shared

type VolumeFilter struct {
	Name   *VolumeFilterNameEnum `json:"Name,omitempty"`
	Values []string              `json:"Values,omitempty"`
}
