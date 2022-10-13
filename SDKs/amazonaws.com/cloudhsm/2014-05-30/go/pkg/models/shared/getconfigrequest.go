package shared

type GetConfigRequest struct {
	ClientArn     string            `json:"ClientArn"`
	ClientVersion ClientVersionEnum `json:"ClientVersion"`
	HapgList      []string          `json:"HapgList"`
}
