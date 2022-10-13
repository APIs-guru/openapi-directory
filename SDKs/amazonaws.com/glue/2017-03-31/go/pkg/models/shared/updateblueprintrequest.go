package shared

type UpdateBlueprintRequest struct {
	BlueprintLocation string  `json:"BlueprintLocation"`
	Description       *string `json:"Description"`
	Name              string  `json:"Name"`
}
