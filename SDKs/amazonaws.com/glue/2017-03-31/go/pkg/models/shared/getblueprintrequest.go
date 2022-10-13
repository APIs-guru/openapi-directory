package shared

type GetBlueprintRequest struct {
	IncludeBlueprint     *bool  `json:"IncludeBlueprint"`
	IncludeParameterSpec *bool  `json:"IncludeParameterSpec"`
	Name                 string `json:"Name"`
}
