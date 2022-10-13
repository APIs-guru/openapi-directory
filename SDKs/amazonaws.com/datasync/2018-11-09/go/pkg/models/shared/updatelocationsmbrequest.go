package shared

type UpdateLocationSmbRequest struct {
	AgentArns    []string         `json:"AgentArns"`
	Domain       *string          `json:"Domain"`
	LocationArn  string           `json:"LocationArn"`
	MountOptions *SmbMountOptions `json:"MountOptions"`
	Password     *string          `json:"Password"`
	Subdirectory *string          `json:"Subdirectory"`
	User         *string          `json:"User"`
}
