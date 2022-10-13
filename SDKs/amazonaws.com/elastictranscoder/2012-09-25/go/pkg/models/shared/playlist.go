package shared

type Playlist struct {
	Format               *string               `json:"Format"`
	HlsContentProtection *HlsContentProtection `json:"HlsContentProtection"`
	Name                 *string               `json:"Name"`
	OutputKeys           []string              `json:"OutputKeys"`
	PlayReadyDrm         *PlayReadyDrm         `json:"PlayReadyDrm"`
	Status               *string               `json:"Status"`
	StatusDetail         *string               `json:"StatusDetail"`
}
