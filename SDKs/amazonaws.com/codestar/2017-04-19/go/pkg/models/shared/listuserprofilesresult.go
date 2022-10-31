package shared

type ListUserProfilesResult struct {
	NextToken    *string              `json:"nextToken,omitempty"`
	UserProfiles []UserProfileSummary `json:"userProfiles"`
}
