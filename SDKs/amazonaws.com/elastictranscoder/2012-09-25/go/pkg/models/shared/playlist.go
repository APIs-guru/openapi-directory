package shared

type Playlist struct {
	Format               *string               `json:"Format,omitempty"`
	HlsContentProtection *HlsContentProtection `json:"HlsContentProtection,omitempty"`
	Name                 *string               `json:"Name,omitempty"`
	OutputKeys           []string              `json:"OutputKeys,omitempty"`
	PlayReadyDrm         *PlayReadyDrm         `json:"PlayReadyDrm,omitempty"`
	Status               *string               `json:"Status,omitempty"`
	StatusDetail         *string               `json:"StatusDetail,omitempty"`
}
