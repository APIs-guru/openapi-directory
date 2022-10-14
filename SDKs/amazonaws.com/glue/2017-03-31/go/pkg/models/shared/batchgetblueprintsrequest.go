package shared

type BatchGetBlueprintsRequest struct {
	IncludeBlueprint     *bool    `json:"IncludeBlueprint,omitempty"`
	IncludeParameterSpec *bool    `json:"IncludeParameterSpec,omitempty"`
	Names                []string `json:"Names"`
}
