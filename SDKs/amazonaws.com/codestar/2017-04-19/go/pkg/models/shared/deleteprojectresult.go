package shared

type DeleteProjectResult struct {
	ProjectArn *string `json:"projectArn"`
	StackID    *string `json:"stackId"`
}
