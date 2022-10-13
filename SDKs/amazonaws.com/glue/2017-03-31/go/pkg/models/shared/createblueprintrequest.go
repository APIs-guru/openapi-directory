package shared

type CreateBlueprintRequest struct {
	BlueprintLocation string            `json:"BlueprintLocation"`
	Description       *string           `json:"Description"`
	Name              string            `json:"Name"`
	Tags              map[string]string `json:"Tags"`
}
