package shared

type ImportComponentResponse struct {
	ClientToken              *string `json:"clientToken"`
	ComponentBuildVersionArn *string `json:"componentBuildVersionArn"`
	RequestID                *string `json:"requestId"`
}
