package shared

// Playlist
//
//	Use Only for Fragmented MP4 or MPEG-TS Outputs. If you specify a preset for which the value of Container is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create. We recommend that you create only one master playlist per output format. The maximum number of master playlists in a job is 30.
type Playlist struct {
	Format               *string               `json:"Format,omitempty"`
	HlsContentProtection *HlsContentProtection `json:"HlsContentProtection,omitempty"`
	Name                 *string               `json:"Name,omitempty"`
	OutputKeys           []string              `json:"OutputKeys,omitempty"`
	PlayReadyDrm         *PlayReadyDrm         `json:"PlayReadyDrm,omitempty"`
	Status               *string               `json:"Status,omitempty"`
	StatusDetail         *string               `json:"StatusDetail,omitempty"`
}
