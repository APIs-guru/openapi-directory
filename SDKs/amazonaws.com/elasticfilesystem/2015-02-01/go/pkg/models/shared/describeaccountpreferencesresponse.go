package shared

type DescribeAccountPreferencesResponse struct {
	NextToken            *string               `json:"NextToken"`
	ResourceIDPreference *ResourceIDPreference `json:"ResourceIdPreference"`
}
