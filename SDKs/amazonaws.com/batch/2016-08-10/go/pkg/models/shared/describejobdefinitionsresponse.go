package shared

type DescribeJobDefinitionsResponse struct {
	JobDefinitions []JobDefinition `json:"jobDefinitions,omitempty"`
	NextToken      *string         `json:"nextToken,omitempty"`
}
