package shared

type GetConfigResponse struct {
	ConfigCred *string `json:"ConfigCred"`
	ConfigFile *string `json:"ConfigFile"`
	ConfigType *string `json:"ConfigType"`
}
