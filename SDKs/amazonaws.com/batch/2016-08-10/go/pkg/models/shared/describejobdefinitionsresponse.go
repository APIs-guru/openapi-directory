package shared

type DescribeJobDefinitionsResponse struct {
	JobDefinitions []JobDefinition `json:"jobDefinitions"`
	NextToken      *string         `json:"nextToken"`
}
