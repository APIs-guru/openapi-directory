package shared

// ListMissionProfilesResponse
// <p/>
type ListMissionProfilesResponse struct {
	MissionProfileList []MissionProfileListItem `json:"missionProfileList,omitempty"`
	NextToken          *string                  `json:"nextToken,omitempty"`
}
