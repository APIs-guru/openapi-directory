package shared

type CreateLocationNfsRequest struct {
	MountOptions   *NfsMountOptions `json:"MountOptions"`
	OnPremConfig   OnPremConfig     `json:"OnPremConfig"`
	ServerHostname string           `json:"ServerHostname"`
	Subdirectory   string           `json:"Subdirectory"`
	Tags           []TagListEntry   `json:"Tags"`
}
