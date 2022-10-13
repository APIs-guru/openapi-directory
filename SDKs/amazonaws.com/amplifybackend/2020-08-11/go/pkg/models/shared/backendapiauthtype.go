package shared

type BackendAPIAuthType struct {
	Mode     *ModeEnum                      `json:"Mode"`
	Settings *BackendAPIAppSyncAuthSettings `json:"Settings"`
}
