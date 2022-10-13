package shared

type ListInstanceProfilesResult struct {
	InstanceProfiles []InstanceProfile `json:"instanceProfiles"`
	NextToken        *string           `json:"nextToken"`
}
