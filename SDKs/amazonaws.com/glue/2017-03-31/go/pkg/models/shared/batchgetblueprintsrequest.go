package shared

type BatchGetBlueprintsRequest struct {
	IncludeBlueprint     *bool    `json:"IncludeBlueprint"`
	IncludeParameterSpec *bool    `json:"IncludeParameterSpec"`
	Names                []string `json:"Names"`
}
