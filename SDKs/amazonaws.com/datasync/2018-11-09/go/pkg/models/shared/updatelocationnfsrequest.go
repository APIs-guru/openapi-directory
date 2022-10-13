package shared

type UpdateLocationNfsRequest struct {
	LocationArn  string           `json:"LocationArn"`
	MountOptions *NfsMountOptions `json:"MountOptions"`
	OnPremConfig *OnPremConfig    `json:"OnPremConfig"`
	Subdirectory *string          `json:"Subdirectory"`
}
