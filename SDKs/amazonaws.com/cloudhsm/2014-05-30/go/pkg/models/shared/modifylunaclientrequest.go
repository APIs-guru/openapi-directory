package shared

type ModifyLunaClientRequest struct {
	Certificate string `json:"Certificate"`
	ClientArn   string `json:"ClientArn"`
}
