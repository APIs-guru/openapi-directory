package shared

type ListEngineVersionsOutput struct {
	EngineVersions []EngineVersion `json:"EngineVersions"`
	NextToken      *string         `json:"NextToken"`
}
