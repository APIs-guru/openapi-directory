package shared

type GetConfigResponse struct {
	ConfigCred *string `json:"ConfigCred,omitempty"`
	ConfigFile *string `json:"ConfigFile,omitempty"`
	ConfigType *string `json:"ConfigType,omitempty"`
}
