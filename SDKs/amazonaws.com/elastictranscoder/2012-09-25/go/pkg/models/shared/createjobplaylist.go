package shared

type CreateJobPlaylist struct {
	Format               *string               `json:"Format"`
	HlsContentProtection *HlsContentProtection `json:"HlsContentProtection"`
	Name                 *string               `json:"Name"`
	OutputKeys           []string              `json:"OutputKeys"`
	PlayReadyDrm         *PlayReadyDrm         `json:"PlayReadyDrm"`
}
