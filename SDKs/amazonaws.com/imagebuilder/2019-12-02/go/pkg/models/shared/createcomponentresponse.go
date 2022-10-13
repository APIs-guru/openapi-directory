package shared

type CreateComponentResponse struct {
	ClientToken              *string `json:"clientToken"`
	ComponentBuildVersionArn *string `json:"componentBuildVersionArn"`
	RequestID                *string `json:"requestId"`
}
