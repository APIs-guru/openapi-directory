package shared

type DescribeAccountPreferencesResponse struct {
	NextToken            *string               `json:"NextToken,omitempty"`
	ResourceIDPreference *ResourceIDPreference `json:"ResourceIdPreference,omitempty"`
}
