package shared

type ListUserProfilesResult struct {
	NextToken    *string              `json:"nextToken"`
	UserProfiles []UserProfileSummary `json:"userProfiles"`
}
