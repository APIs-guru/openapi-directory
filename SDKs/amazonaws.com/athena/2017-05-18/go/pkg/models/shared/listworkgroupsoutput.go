package shared

type ListWorkGroupsOutput struct {
	NextToken  *string            `json:"NextToken"`
	WorkGroups []WorkGroupSummary `json:"WorkGroups"`
}
