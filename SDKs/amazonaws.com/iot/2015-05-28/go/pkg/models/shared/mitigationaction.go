package shared

type MitigationAction struct {
	ActionParams *MitigationActionParams `json:"actionParams"`
	ID           *string                 `json:"id"`
	Name         *string                 `json:"name"`
	RoleArn      *string                 `json:"roleArn"`
}
