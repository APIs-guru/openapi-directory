package shared

// BlueprintDetails
// The details of a blueprint.
type BlueprintDetails struct {
	BlueprintName *string `json:"BlueprintName,omitempty"`
	RunID         *string `json:"RunId,omitempty"`
}
