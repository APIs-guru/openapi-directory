package shared

type DeleteComponentResponse struct {
	ComponentBuildVersionArn *string `json:"componentBuildVersionArn"`
	RequestID                *string `json:"requestId"`
}
