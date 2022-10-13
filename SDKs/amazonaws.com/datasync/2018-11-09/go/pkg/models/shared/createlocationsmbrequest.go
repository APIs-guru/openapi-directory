package shared

type CreateLocationSmbRequest struct {
	AgentArns      []string         `json:"AgentArns"`
	Domain         *string          `json:"Domain"`
	MountOptions   *SmbMountOptions `json:"MountOptions"`
	Password       string           `json:"Password"`
	ServerHostname string           `json:"ServerHostname"`
	Subdirectory   string           `json:"Subdirectory"`
	Tags           []TagListEntry   `json:"Tags"`
	User           string           `json:"User"`
}
