package shared

type UpdateBlueprintRequest struct {
	BlueprintLocation string  `json:"BlueprintLocation"`
	Description       *string `json:"Description,omitempty"`
	Name              string  `json:"Name"`
}
