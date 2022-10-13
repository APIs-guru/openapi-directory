package shared

type ListMissionProfilesResponse struct {
	MissionProfileList []MissionProfileListItem `json:"missionProfileList"`
	NextToken          *string                  `json:"nextToken"`
}
