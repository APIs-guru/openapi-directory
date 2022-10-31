package shared

type StartBlueprintRunRequest struct {
	BlueprintName string  `json:"BlueprintName"`
	Parameters    *string `json:"Parameters,omitempty"`
	RoleArn       string  `json:"RoleArn"`
}
