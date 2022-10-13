package shared

type StartBlueprintRunRequest struct {
	BlueprintName string  `json:"BlueprintName"`
	Parameters    *string `json:"Parameters"`
	RoleArn       string  `json:"RoleArn"`
}
